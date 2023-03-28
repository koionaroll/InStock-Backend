const knex = require('knex')(require('../knexfile'));
const { v4: uuidv4 } = require('uuid');

exports.index = (_req, res) => {
   knex('inventories')
   .then((data) => {
    res.status(200).json(data);
   })
   .catch((err) => {
    res.status(400).send(`Error retrieving Inventories: ${err}`);
   })
};

exports.singleInventory = (req, res) => {
   knex('inventories')
   .where({id: req.params.id})
   .then((data) => {
       if (data.length <= 0) {
           return res.status(404).send(`Record with id: ${req.params.id} is not found`);
       }
       res.status(200).json(data[0]);
   })
   .catch((err) => {
       res.status(400).send(`Error in retrieving inventory item: ${req.params.id} ${err}`);
   })
};

exports.deleteInventory = (req, res) => {
    knex('inventories')
      .delete()
      .where({ id: req.params.id })
      .then(() => {
        res.status(204).send();
      })
      .catch((err) =>
        res.status(400).send(`Error deleting Inventory ${req.params.id} ${err}`)
      );
};

exports.newInventory = (req, res) => {


    let newItem = req.body;

    if (!newItem.item_name || !newItem.description || !newItem.category || !newItem.status || !newItem.quantity) {
        return res.status(400).send(`Could not add a new inventory item. Make sure to fill in all of the missing fields`);
    }

    // give the new inventory item a new id
    newItem.id = uuidv4();
    knex("inventories")
    .insert(newItem)
    .then(data => {
        res.status(201).send(`inventory successfully created and added to warehosue with Id ${req.params.id}`);
    })
    .catch(err => {
        console.log(`Could not add new inventory item ${err}`);
    })
}

exports.editInventory = (req, res) => {

    let updatedItem = req.body;
    let warehouseId = req.params.id;

    if (!updatedItem.item_name || !updatedItem.description || !updatedItem.category || !updatedItem.status
        || !updatedItem.quantity) {
        return res.status(400).send(`Counld not edit inventory Item. Please fill in all of the missing fields`);
    }

    updatedItem.id = warehouseId;

    knex("inventories")
    .update(updatedItem)
    .where()
    .then(() => {

    })
    .catch(err => {
        console.log(`Error in updating inventory item ${err}`)
    })
}


