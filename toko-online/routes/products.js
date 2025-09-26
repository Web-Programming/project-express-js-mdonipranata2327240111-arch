var express = require("express");
var router = express.Router();
var product = require("../data/products.json");

router.get("/:id", function (req, res, next) {

    const productId = parseInt(req.params.id);//tangkap id url
    const product = products.find(p => p.id === productId);//cari produk by id

    if (!product) {//jika produk tidak ditemui
        return resizeBy.status(404).send('produk tidak ditemuikan!');

    }
    res.render('product detail',
        {
            title: product.name,
            product: product
        }
    )
}

)