const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const User = require('../models/user');
const {isLoggedIn} = require('../middleware');


router.get('/user/:userId/cart', isLoggedIn , async(req,res) => {
    const user = await User.findById(req.params.userId).populate('cart');
    res.render('cart/showCart', {userCart: user.cart })
})

router.post('/user/:productId/cart', isLoggedIn, async(req,res) => {
    try{    
        const product = await Product.findById(req.params.productId);
        const user = req.user;

        user.cart.push(product);
        user.save();
        req.flash('success','Item added to cart successfully!');
        res.redirect(`/products/${req.params.productId}`);
    }
    catch(e){
        console.log(e);
        req.flash('error','Some Error Occurred!');
        res.redirect(`/products/${req.params.productId}`);
    }
})

//Delete an item from cart
router.delete('/user/:userId/cart/:productId', isLoggedIn ,async(req,res) => {
    const {userId,productId} = req.params;
    await User.findByIdAndUpdate(userId,{$pull: {cart: productId}});
    res.redirect(`/user/${userId}/cart`);
})

router.get('/user/:userId/success', isLoggedIn, async(req,res) => {

    const {userId} = req.params;

    const user = await User.findById(userId);

    const removedItem = user.cart.splice(0);
    
    await user.save();

    res.render('success');
}) 

module.exports = router;