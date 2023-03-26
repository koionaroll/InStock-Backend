const express = require("express");
const cors = require("cors");
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 5050;

// basic home route
// app.get('/', (req, res) => {
//   res.send('Welcome to my API');
// });

app.use(cors());
app.use(express.json());
const warehouseRoutes = require('./routes/warehouseRoute');
const inventoryRoutes = require('./routes/inventoryRoute');


const warehouseRoutes = require("./routes/warehouseRoute");
const inventoryRoutes = require("./routes/inventoryRoute");

app.use("/warehouses", warehouseRoutes);
app.use("/inventories", inventoryRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
