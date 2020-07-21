//Comment: In Node.js, any file that consists of JavaScript code in a file ending with .js is a module.
const express = require('express');

hello = () => { return "Hello, title is being calling my function that exist another file, Function.js!";}
module.exports.SetdbName = () => 
{
    let dbString = 'PassedDbNamedFromFuntionnnn';
    console.log('Called from SetdbName function.');
    return dbString;
}
module.exports.setTitleName = () =>
{
    let setTitle = "Hello, family Ramirez :) [from Funtions.js]";
    return setTitle;
}
module.exports.setSchemaName = () =>
{
    let setName = "functionSetSchemaName";
    return setName;
}

module.exports.printMiddleWareRun = (req, res, next) =>
{
    console.log('Print middleware funtion in Functions.js file');
    next();
}