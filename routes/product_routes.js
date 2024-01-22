const express = require("express");
const routes = express.Router();
const controllersproduct = require("../controllers/product");

routes.get("/product", controllersproduct.allproduct);
routes.get("/product/:id", controllersproduct.getproductById);
routes.post("/product", controllersproduct.createproduct);
routes.delete("/product/:id", controllersproduct.deleteproduct);

module.exports = routes;
