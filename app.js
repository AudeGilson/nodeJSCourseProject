const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('this always run');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('in antoher middleware');
    res.send('<h1>The add product page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('in antoher middleware');
    res.send('<h1>Hello form express</h1>');
});

app.listen(3000);
