const pool = require("../../../database/shop_database");

class DeleteAdmin {
  async handler(req, res) {
    const data = req.body;
    try {
      const { deleteQuery } = require('../../../database/admin_query');

      const admin = await pool.query(deleteQuery, [data.id]);

      res.send("sucesso");
    } catch (error) {
      console.error(error);
      res.status(400).send({ error: true, message: error.message });
    }
  }
}

module.exports = DeleteAdmin;
