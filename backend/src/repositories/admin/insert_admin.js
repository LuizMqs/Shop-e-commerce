const pool = require("../../../database/shop_database");

class InsertAdmin {
  async handler(req, res) {
    const data = req.body
    try {
      const { insertQuery } = require('../../../database/admin_query');

      const admin = await pool.query(insertQuery, [
        
        data.name
      ]);

      res.send("sucesso");
    } catch (error) {
      console.error(error);
      res.status(400).send({ error: true, message: error.message });
    }
  }
}

module.exports = InsertAdmin;
