const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Product = require('./product');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'customer',
        trim: true
    },
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User',userSchema);

module.exports = User;
