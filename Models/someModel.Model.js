const mongoose = require('mongoose');
const schema = mongoose.Schema;
const {setSchemaName} = require('../Functions');

const ProductSchema = new mongoose.Schema
(
    {
        _id: mongoose.Types.ObjectId,
        //I tryed to pass a funtion and failed. Cannot be dynamic this is static
        name: 
        { 
            type: String,
            require: true
        },
        email:
        {
            type: String,
            required: true
        }
    }
);

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;