const express = require('express');
const mongoose = require('mongoose');
const createError = require('http-errors');
const {setTitleName, SetdbName} = require('../Functions');
const Product = require('../Models/someModel.Model');

const router = express.Router();



router.get('/', async (req, res, next) =>
{
    try
    {
        console.log('Home get has been called');
        res.render('index',
        {
            title: setTitleName()
        });
        //res.end();//next();
    }
    catch(error)
    {
        console.log(error.message);
    }
});
router.post('/', async (req, res, next) =>
{
    try
    {
        console.log('home post router has been called.');
        console.log(req.body);
        const product = new Product
        ({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            email: req.body.email
        });
        const result = await product.save();
        console.log(result);
        res.redirect('/');
    }
    catch(error)
    {
        console.log(error.message);
    }
});

module.exports = router;