const express = require('express');
const router = express.Router();

const DeleteAdmin = require('../src/repositories/admin/delete_admin')
const EditAdmin = require('../src/repositories/admin/edit_admin')
const InsertAdmin = require('../src/repositories/admin/insert_admin')
const ListAdmin = require('../src/repositories/admin/list_admin')

//Inserir administrador
router.post("/admin/insert", new InsertAdmin().handler.bind(new InsertAdmin));

//Mostra os administrador
router.get("/admin/list", new ListAdmin().handler.bind(new ListAdmin));

//Modifica o administrador
router.put("/admin/update", new EditAdmin().handler.bind(new EditAdmin));

//Deleta o administrador
router.delete("/admin/delete", new DeleteAdmin().handler.bind(new DeleteAdmin));

module.exports = router;