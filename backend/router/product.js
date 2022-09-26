const express = require('express');
const router = express.Router();

const DeleteProduct = require('../src/repositories/product/delete_product')
const EditProduct = require('../src/repositories/product/edit_product')
const InsertProduct = require('../src/repositories/product/insert_product')
const ListProduct = require('../src/repositories/product/list_product')

//Inserir produto
router.post("/product/insert", new InsertProduct().handler.bind(new InsertProduct));

//Mostra os produto
router.get("/product/list/:sort", new ListProduct().handler.bind(new ListProduct));

//Modifica o produto
router.put("/product/update", new EditProduct().handler.bind(new EditProduct));

//Deleta o produto
router.delete("/product/delete", new DeleteProduct().handler.bind(new DeleteProduct));

module.exports = router;