const express = require('express');
const router = express.Router();

const DeleteShopCart = require('../src/repositories/shop_cart/delete_shop_cart')
const InsertShopCart = require('../src/repositories/shop_cart/insert_shop_cart')
const CountShopCart = require('../src/repositories/shop_cart/count_shop_cart')
const ListShopCart = require('../src/repositories/shop_cart/list_shop_cart')
const SumShopCart = require('../src/repositories/shop_cart/sum_shop_cart')

//Inserir produto
router.post("/shop_cart/insert", new InsertShopCart().handler.bind(new InsertShopCart));

//Conta os carrinhos
router.get("/shop_cart/count", new CountShopCart().handler.bind(new CountShopCart));

//Soma o valor dos produtos
router.get("/shop_cart/sum", new SumShopCart().handler.bind(new SumShopCart));

//Lista os produtos no carrinho
router.get("/shop_cart/list", new ListShopCart().handler.bind(new ListShopCart));

//Deleta o produto
router.delete("/shop_cart/delete", new DeleteShopCart().handler.bind(new DeleteShopCart));

module.exports = router;