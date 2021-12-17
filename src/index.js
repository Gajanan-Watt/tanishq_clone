const express = require("express");


const productController = require("./controllers/product.controller");

// const Product = require("./models/product.model");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");


app.set("views", "./src/views");
app.use(express.static("src/public"));

app.use("/products", productController);

app.get("/Tanishq", async (req, res) => {
	res.render("index");
});

app.get("/Tanishq/login", async (req, res) => {
	res.render("login.ejs");
});

app.get("/Tanishq/signup", async (req, res) => {
	res.render("signup.ejs");
});

// product controllers to be placed in other folder for products page
// app.get("/Tanishq/products", async(req, res) => {
//     const product_data = await Product.find().lean().exec();
//     res.render("products_page", {
//         product_data: product_data,
//     });
// })

module.exports = app;
