const router = require('express').Router();
const warehouseController = require('../controllers/warehouseController');

router
    .route('/')
    .get(warehouseController.index)
    .post(warehouseController.newWarehouse);

router
    .route('/:id')
    .get(warehouseController.singleWarehouse);
 

router
    .route('/:id/inventories')
    .get(warehouseController.warehouseInventory)
    .delete(warehouseController.deleteWarehouse);

module.exports = router;

