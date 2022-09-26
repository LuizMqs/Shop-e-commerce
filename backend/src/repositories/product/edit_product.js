const pool = require("../../../database/shop_database");

class EditProduct {
  async handler(req, res) {
    const data = req.body;
    try {
      const { updateQuery } = require('../../../database/product_query');

      const product = await pool.query(updateQuery, [data.password, data.id]);

      res.send("sucesso");
    } catch (error) {
      console.error(error);
      res.status(400).send({ error: true, message: error.message });
    }
  }
}

module.exports = EditProduct;
