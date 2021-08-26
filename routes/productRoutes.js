const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');
const {isLoggedIn} = require('../middleware');

//for showing all products
router.get('/products',async (req,res) => {
    try{
        const products = await Product.find({});
        res.render('products/index',{ products });
    }
    catch(e){
        console.log(e);
        req.flash('error',"Some problem occurred!");
        res.redirect('/error');
    }
})

//Getting a form for adding new product
router.get('/products/new', isLoggedIn ,(req,res) => {
    res.render('products/new');
})

//Adding a new Product
router.post('/products', isLoggedIn, async(req,res) => {
    try{
        const product = {... req.body};
        const newProduct = await Product.create(product);
        req.flash('success','Product Added Successfully');
        res.redirect(`/products`);
    }
    catch(e){
        console.log(e);
        req.flash('error','Some Problem Occurred!');
        res.redirect('/error');
    }
    
})

//for showing a specific product with the given id
router.get('/products/:id', async(req,res) => {
    try{
        const product = await Product.findById(req.params.id).populate('reviews');
        res.render('products/show', { product });
    }
    catch(e){
        console.log(e);
        req.flash('error','Some Problem Occurred!');
        res.redirect('/error');
    }
})

//Get a from to edit the product
router.get('/products/:id/edit', isLoggedIn, async(req,res) => {
    const product = await Product.findById(req.params.id);
    res.render('products/edit',{ product });
})

//Update the product
router.patch('/products/:id', isLoggedIn, async(req,res) => {
    try{
        const updatedValues = { ... req.body};
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,updatedValues);
        req.flash('success','Product Updated Sucessfully');
        res.redirect(`/products/${req.params.id}`);
    }
    catch(e){
        console.log(e);
        req.flash('error','Some Problem Occurred!');
        res.redirect('/error');
    }
})

//Delete the product
router.delete('/products/:id', isLoggedIn, async(req,res) => {
    try{
        console.log("You hit the delete route");
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        req.flash('success','Product Deleted Successfully!');
        res.redirect(`/products`);
    }
    catch(e){
        console.log(e);
        req.flash('error','Some problem occurred while deleting the Product!');
        res.redirect('/error')
    }
   
})

//posting a review
router.post('/products/:id/review', isLoggedIn, async(req,res) => {
    const product = await Product.findById(req.params.id);

    const review = {
                    user: req.user.username,
                    ... req.body
                };
    const newReview = new Review(review);

    product.reviews.push(newReview);

    await newReview.save();
    await product.save();

    res.redirect(`/products/${req.params.id}`);
    // res.send("Review created");
})


module.exports = router;

