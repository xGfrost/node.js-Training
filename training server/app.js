const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// lister for requests
app.listen (3000);

// middleware & static files
app.use(express.static('public'))

app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});

app.use((req, res, next) => {
    console.log('in the next middleware');
    next();
});

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Gfrost finds person', snippet: 'lorem ipsum dolor sit amet consectetur'},
        { title: 'Gfrost finds fish', snippet: 'lorem ipsum dolor sit amet consectetur'},
        { title: 'Gfrost finds love', snippet: 'lorem ipsum dolor sit amet consectetur'},
    ];
    // res.send('<p>home page</p>'); //express npm
    res.render('index', { title: 'Home',blogs});
});


app.get('/about', (req, res) => {
    // res.send('<p>about page</p>'); //express npm
    res.render('about', { title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new page'});
})


// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });


// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});