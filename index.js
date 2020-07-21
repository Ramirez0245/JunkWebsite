//Current Goal: From template engine send to mongoose db

const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const HomeRoute = require('./Routes/Home.route');
const DataDisplayRoute = require('./Routes/DataDisplayRoute.route');
const { SetdbName, printMiddleWareRun} = require('./Functions');
const app = express();

app.use(express.json()); //Handles json POST
app.use(express.urlencoded({extended: true})); //Handles x-www.form-urlencoded
///*
mongoose.connect('mongodb+srv://cluster0-qb9lb.mongodb.net/',
{
    dbName:  SetdbName(),
    user: 'culexz0',
    pass: '789741Xt',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
   // driver: true
});
//*/
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Middleware: Can be used to check for that everything request has been authicated.
app.use(printMiddleWareRun);

app.use('/', HomeRoute);
app.use('/search', HomeRoute , DataDisplayRoute);



app.use((req, res, next) =>
{
    //const err = new Error('Error oject.');
    //err.status = 404;
    //next(err);
    console.log('Inside index.js file in the app.use middleware');
    //next(createError(404, 'Not found'));
    next();
}); 

app.use((err, req, res, next) =>
{
    console.log('app.use function has been hit; error');
    res.status(err.status || 500);
    res.send
    ({
        error: 
        {
            status: err.status || 500,
            message: err.message
        }
    });
    console.log('app.use function has been hit; error');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));

//Point: I call pass this to title.
//hello = () => { return "Hello, title is calling my function!"; }