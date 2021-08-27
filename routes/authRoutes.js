const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/user');

router.get('/register',(req,res) => {
    res.render('auth/register');
})

router.get('/register/seller',(req,res) => {
    res.render('auth/registerSeller');
})

router.post('/register',async(req,res) => {
    try{
        const user = {
            username: req.body.username,
            email: req.body.email,
            role: req.body.role
        };
        const newUser = await User.register(user,req.body.password);
        req.flash('success','User Registered Successfully!');
        res.redirect('/login');
    }
    catch(e){
        console.log(e);
        req.flash('error','Some Error Occurred!');
        res.redirect('/register');
    }
})

router.get('/login',(req,res) => {
    res.render('auth/login');
})

router.post('/login',passport.authenticate('local', 
{
    failureRedirect:'/login',
    failureFlash: true

}),(req,res) => {
        req.flash('success',`Welcome Back! ${req.user.username}`);
        res.redirect('/products');
})

router.get('/logout',(req,res) => {
    try{
        req.logout();
        req.flash('success','User Logged Out Successfully');
        res.redirect('/login');
    }
    catch(e){
        console.log(e);
        req.flash('error',"Couldn't Logout due to some error")
        res.redirect('/error');
    }
    
})

module.exports = router;