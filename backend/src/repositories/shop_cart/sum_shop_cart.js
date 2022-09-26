const pool = require("../../../database/shop_database");

class SumShopCart {
  async handler(req, res) {
    const data = req.body;
    try {
      const { findCartProductQuery } = require("../../../database/shop_cart_query");
      const id = await pool.query(findCartProductQuery, [ data.user_id ])

      const { CardProductsPriceQuery } = require("../../../database/cart_product_query");
      const sum = await pool.query(CardProductsPriceQuery, [ id.rows[0]["id"] ]);

      res.send(sum.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(400).send({ error: true, message: error.message });
    }
  }
}

module.exports = SumShopCart;