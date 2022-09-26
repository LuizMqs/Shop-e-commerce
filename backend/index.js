const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8000;
const pool = require("./src/repositories/index");

const admin_router = require('./router/admin')
const client_router = require('./router/client')
const product_router = require('./router/product')
const shop_cart_router = require('./router/shop_cart')

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  })
);

app.use(admin_router)
app.use(client_router)
app.use(product_router)
app.use(shop_cart_router)

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});