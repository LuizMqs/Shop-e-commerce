const pool = require("../../../database/shop_database");

class ListClient {
  async handler(req, res) {
    try {
      const { listQuery } = require('../../../database/admin_query');

      const admin = await pool.query(listQuery);

      res.send(clients.rows);
    } catch (error) {
      console.error(error);
      res.status(400).send({ error: true, message: error.message });
    }
  }
}

module.exports = ListClient;