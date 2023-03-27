const knex = require('knex')(require('../knexfile'));
const { v4: uuidv4 } = require('uuid');


// What is index?
// select * from warehouse
exports.index = (_req, res) => {
    // accessing the table name
  knex('warehouses')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Warehouses: ${err}`)
    );
};

exports.singleWarehouse = (req, res) => {
    knex('warehouses')
    .where({id: req.params.id})
    .then((data) => {
        if (data.length <= 0) {
            return res.status(404).send(`Record with id: ${req.params.id} is not found`);
        }
        // we need to index the first element becasue the return result is an array
        res.status(200).json(data[0]);
    })
    .catch((err) => {
        res.status(400).send(`Error in retrieving warehouse ${req.params.id} ${err}`);
    })
}

exports.warehouseInventory = (req, res) => {
  knex ('inventories')
  .where({warehouse_id: req.params.id})
  .then((data) => { 
    if (data.length <= 0) {
      return res.status(404).send(`Record with id: ${req.params.id} is not found`);
  }   
    res.status(200).json(data);
})
  .catch((err) => {
    res.status(400).send(`Error in retrieving warehouse inventory ${req.params.id} ${err}`);
})
}

exports.deleteWarehouse = (req, res) => {
  knex('warehouses')
    .delete()
    .where({ id: req.params.id })
    .then(() => {
      res.status(204).send();
    })
    .catch((err) =>
      res.status(400).send(`Error deleting Warehouse ${req.params.id} ${err}`)
    );
};

exports.newWarehouse = (req, res) => {
console.log(req.body)
    if (!req.body.warehouse_name || !req.body.address || !req.body.city || !req.body.country || !req.body.contact_name || !req.body.contact_position
       || !req.body.contact_phone || !req.body.contact_email) {
        return res.status(400).send("Counld not add new warehouse. Please fill in all of the missing fields");
    }

    // "warehouse_name": "Chicago",
    // "address": "3218 Guess Rd",
    // "city": "Chicago",
    // "country": "USA",
    // "contact_name": "Jameson Schuppe",
    // "contact_position": "Warehouse Manager",
    // "contact_phone": "+1 (919) 797-2875",
    // "contact_email": "jschuppe@instock.com"

    const newWarehouse = req.body;
    newWarehouse.id = uuidv4();

    knex("warehouses")
    .insert(newWarehouse)
    .then(data => {
        res.status(201).send("Warehouse successfully created!");
        
    })
    .catch((err) => {
        res.status(400).send(`Error in creating new warehouse ${err}`);
    })
    

}

exports.editWarehouse = (req, res ) => {

    // check if any of the inputs coming from the front end form are empty
    // return error if so
    if (!req.body.warehouse_name || !req.body.address || !req.body.city || !req.body.country || !req.body.contact_name || !req.body.contact_position
        || !req.body.contact_phone || !req.body.contact_email) {
         return res.status(400).send("Counld not add new warehouse. Please fill in all of the missing fields");
    }

    updatedWarehouse = req.body;

    knex("warehouses")
    .update(req.body)
    .where({id: req.body.id})
    .then(() => {
        res.status(201).send("Recode successfully updated");
    })
    .catch((err) => {
        res.status(401).send(`Error in updated warehouse with id ${req.params.id}. The error is: ${err}`);
    })
}
