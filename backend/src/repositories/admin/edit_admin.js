const pool = require("../../../database/shop_database");

class EditAdmin {
  async handler(req, res) {
    const data = req.body;
    try {
      const { updateQuery } = require('../../../database/admin_query');

      const admin = await pool.query(updateQuery, [data.name, data.id]);

      res.send("sucesso");
    } catch (error) {
      console.error(error);
      res.status(400).send({ error: true, message: error.message });
    }
  }
}

module.exports = EditAdmin;
