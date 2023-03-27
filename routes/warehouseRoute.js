const router = require('express').Router();
const warehouseController = require('../controllers/warehouseController');

router
    .route('/')
    .get(warehouseController.index)
    .post(warehouseController.newWarehouse);

router
    .route('/:id')
    .get(warehouseController.singleWarehouse)
    .put(warehouseController.editWarehouse)
    .delete(warehouseController.deleteWarehouse);
 
// router
//     .route('/edit/:id')
//     .put(warehouseController.editWarehouse)

router
    .route('/:id/inventories')
    .get(warehouseController.warehouseInventory)
    // .delete(warehouseController.deleteWarehouse);

module.exports = router;

