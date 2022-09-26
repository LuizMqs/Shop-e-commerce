const pool = require("../../../database/shop_database");

class InsertProduct{
  async handler(req, res) {
    const data = req.body
    try {
      const { insertQuery } = require('../../../database/product_query');

      const product = await pool.query(insertQuery, [
        data.name,
        data.category,
        data.price,
        data.brand,
        data.created_by
      ]);

      res.send("sucesso");
    } catch (error) {
      console.error(error);
      res.status(400).send({ error: true, message: error.message });
    }
  }
}

module.exports = InsertProduct;
