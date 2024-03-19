const express = require('express')
const router = express.Router()
const productModel = require('./../models/product.model')

router.get('/', async (req, res) => {
    const products = await productModel.find({})
    console.log("Products Get Successfully");

    res.render('index', { products })
})

router.get(('/view'), async (req, res) => {
    res.render('add')
})

router.post("/add", async (req, res) => {
    let { id } = req.body;

    if (id) {
        await productModel.findByIdAndUpdate(id,{
            title: req.body.title,
            price: req.body.price,
            rating: req.body.rating,
            description: req.body.description,
            discount: req.body.discount,
            brand: req.body.brand,
            category: req.body.category
        })

        console.log("Product Update Successfully");

    } else {

        const product = productModel({
            title: req.body.title,
            price: req.body.price,
            rating: req.body.rating,
            description: req.body.description,
            discount: req.body.discount,
            brand: req.body.brand,
            category: req.body.category
        })

        await product.save();
        console.log("Product Save Successfully");
    }
    res.redirect('/');
})

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await productModel.deleteOne({ _id: id });
    console.log("Product Delete Successfully");
    res.redirect('/')
})
router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const product = await productModel.findOne({ _id: id });
    console.log("Product Find Successfully");
    res.render('update', { product });
})

module.exports = router