const pool = require("../../../database/shop_database");

class DeleteShopCart {
  async handler(req, res) {
    const data = req.body;
    try {
      const { idProductQuery } = require('../../../database/product_query');
      const product_id = await pool.query(idProductQuery, [ data.product_name ])

      const { verifyQuery } = require("../../../database/shop_cart_query");
      const cart_id = await pool.query(verifyQuery, [ data.user_id ]);

      const { CartProductIdQuery } = require("../../../database/cart_product_query")
      const cart_product_id = await pool.query(CartProductIdQuery, [ cart_id.rows[0]["id"] ])

      const { deleteQuery } = require('../../../database/cart_product_query');
      const shopCart = await pool.query(deleteQuery, [ cart_product_id.rows[0]["id"]]);

      res.send("sucesso");
    } catch (error) {
      console.error(error);
      res.status(400).send({ error: true, message: error.message });
    }
  }
}

module.exports = DeleteShopCart;