const express = require('express');
const router = express.Router();

const DeleteClient = require('../src/repositories/client/delete_client')
const EditClient= require('../src/repositories/client/edit_client')
const InsertClient = require('../src/repositories/client/insert_client')
const ListClient = require('../src/repositories/client/list_client')

//Inserir cliente
router.post("/client/insert", new InsertClient().handler.bind(new InsertClient));

//Mostra os cliente
router.get("/client/list", new ListClient().handler.bind(new ListClient));

//Modifica o cliente
router.put("/client/update", new EditClient().handler.bind(new EditClient));

//Deleta o cliente
router.delete("/client/delete", new DeleteClient().handler.bind(new DeleteClient));

module.exports = router;