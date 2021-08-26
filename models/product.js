const mongoose = require('mongoose');
const Review = require('./review');

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    desc: {
        type: String,
        required: true
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
    
});

const Product = mongoose.model('Product',productSchema);

module.exports = Product;