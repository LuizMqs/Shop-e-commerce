const pool = require("../../../database/shop_database");

class ListProduct {
  async handler(req, res) {
    const sort = req.params.sort
    try {
      let { listQuery } = require('../../../database/product_query');
      listQuery += " " + sort
      console.log(listQuery)
      const product = await pool.query(listQuery);
      
      res.send(product.rows);
    } catch (error) {
      console.error(error);
      res.status(400).send({ error: true, message: error.message });
    }
  }
}

module.exports = ListProduct;