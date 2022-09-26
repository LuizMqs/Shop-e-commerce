const pool = require("../../../database/shop_database");

class CountShopCart {
  async handler(req, res) {
    const data = req.body;
    try {
      const { findCartProductQuery } = require("../../../database/shop_cart_query");
      const id = await pool.query(findCartProductQuery, [data.user_id])

      const { countQuery } = require("../../../database/cart_product_query");
      const count = await pool.query(countQuery, [id.rows[0]["id"]]);

      res.send(count.rows);
    } catch (error) {
      console.error(error);
      res.status(400).send({ error: true, message: error.message });
    }
  }
}

module.exports = CountShopCart;