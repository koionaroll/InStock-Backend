const knex = require('knex')(require('../knexfile'));


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