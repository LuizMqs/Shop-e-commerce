const pool = require("../../../database/shop_database");

class InsertClient{
  async handler(req, res) {
    const data = req.body
    try {
      const { insertQuery } = require('../../../database/client_query');

      const clients = await pool.query(insertQuery, [
        data.cpf,
        data.name,
        data.address,
        data.email,
        data.password,
        data.user_name,
      ]);

      res.send("sucesso");
    } catch (error) {
      console.error(error);
      res.status(400).send({ error: true, message: error.message });
    }
  }
}

module.exports = InsertClient;
