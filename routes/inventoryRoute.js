const router = require('express').Router();
const inventoryController = require("../controllers/inventoryController");

router.route('/').get(inventoryController.index);

router
    .route('/:id')
    .get(inventoryController.singleInventory)
    .delete(inventoryController.deleteInventory)
    .put(inventoryController.editInventory);

router
    .route("/")
    .post(inventoryController.newInventory);



    // .route("warehouses/:id/")

module.exports = router;


