const pool = require("../../../database/shop_database");

class ListShopCart {
  async handler(req, res) {
    const data = req.body;
    try {
      const { findCartProductQuery } = require("../../../database/shop_cart_query");
      const id = await pool.query(findCartProductQuery, [data.user_id])

      const { productIdQuery } = require("../../../database/cart_product_query");
      const productList = await pool.query(productIdQuery, [id.rows[0]["id"]]);

      res.send(productList.rows);
    } catch (error) {
      console.error(error);
      res.status(400).send({ error: true, message: error.message });
    }
  }
}

module.exports = ListShopCart;