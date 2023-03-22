const knex = require('knex')(require('../knexfile'));

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
