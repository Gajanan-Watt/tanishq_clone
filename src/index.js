const express = require('express');

const navbar = require("./views/scripts/navbar");

const productController = require("./controllers/product.controller") ;
const singleController = require("./controllers/single_product.controller")

const Product = require('./models/product.model') ;

const app = express();

app.use(express.json()) ;


app.set("view engine", "ejs");

app.set("views", "./src/views")

app.use("/products" , productController) ;

app.get("/Tanishq", async (req, res) => {

    res.render("index", {
        navbar: navbar,
    });
})

app.use("/single" , singleController)

// product controllers to be placed in other folder for products page
// app.get("/Tanishq/products", async(req, res) => {
//     const product_data = await Product.find().lean().exec();
//     res.render("products_page", {
//         product_data: product_data,
//     });
// })



module.exports = app ;