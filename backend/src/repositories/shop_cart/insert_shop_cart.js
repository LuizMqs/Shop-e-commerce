const pool = require("../../../database/shop_database");

class InsertShopCart {
  async handler(req, res) {
    const data = req.body;
    try {
      const { verifyQuery } = require("../../../database/shop_cart_query");
      let id = await pool.query(verifyQuery, [data.user_id]);

      if (!id.rows[0]) {
        const { insertShopCartQuery } = require("../../../database/shop_cart_query");
        const cart = await pool.query(insertShopCartQuery, [data.user_id]);
        id = await pool.query(verifyQuery, [data.user_id]);
      }
      console.log(id)
      const { insertQuery } = require("../../../database/cart_product_query");
      const insertedCartProduct = await pool.query(insertQuery, [
        id.rows[0]["id"],
        data.product_id
      ]);

      res.send("sucesso");
    } catch (error) {
      console.error(error);
      res.status(400).send({ error: true, message: error.message });
    }
  }
}

module.exports = InsertShopCart;
