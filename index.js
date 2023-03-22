const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;

// basic home route
// app.get('/', (req, res) => {
//   res.send('Welcome to my API');
// });
const warehouseRoutes = require('./routes/warehouseRoute');
const inventoryRoutes = require('./routes/inventoryRoute');

app.use('/warehouses', warehouseRoutes);
app.use('/inventories', inventoryRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});