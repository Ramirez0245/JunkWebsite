const express = require('express');
const mongoose = require('mongoose');

const dataRouter = express.Router();

const Product = require('../Models/someModel.Model');

const router = express.Router();

dataRouter.get('/', async (req, res, next) =>
{
    console.log('DisplayDataRoute get has been called');
    //res.send('Inside dataRouter.get')
    next();
});

module.exports = dataRouter;