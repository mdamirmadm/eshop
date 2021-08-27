if(process.env.NODE_ENV!=="production"){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const path = require("path");
const seed = require('./seed');

//Requiring Routes
const productRoutes =  require('./routes/productRoutes');
const authRoutes =  require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');

mongoose.connect(process.env.DB_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch(err => {
        console.log("Error! Something went Wrong.");
        console.log(err);
    });


app.set('view engine','ejs');
app.set("views",path.join(__dirname,'/views'));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/public')));
app.use(methodOverride('_method'));

//configuring session
const sessionConfig = {
    secret: 'thisisasecret',
    resave:false,
    saveUninitialized: true
}

app.use(session(sessionConfig));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
})

// seed();

app.get('/',(req,res) => {
    res.render('home');
})

//middleware for Routes
app.use(productRoutes);
app.use(authRoutes);
app.use(cartRoutes);


app.listen(process.env.PORT || 3000,() => {
    console.log("Server running at port 3000");
})