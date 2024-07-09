const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// connect to mongoDB
const dbURI = 'mongodb+srv://Gfrost:Delvinet7475@nodetuts.furwyeo.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=nodetuts';
mongoose.connect(dbURI)
.then((result) => {
    console.log(result)
    app.listen (4000)
})
.catch((err) => console.log(err));

// express app
const app = express();
// app.listen(4000)

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('jalan');
})

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//     .then((result) =>{
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('66894a17a29c8c451011900c')
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// })

// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });

// app.get('/', (req, res) => {
//     res.redirect('/blogs');
//     // const blogs = [
//     //     { title: 'Gfrost finds person', snippet: 'lorem ipsum dolor sit amet consectetur'},
//     //     { title: 'Gfrost finds fish', snippet: 'lorem ipsum dolor sit amet consectetur'},
//     //     { title: 'Gfrost finds love', snippet: 'lorem ipsum dolor sit amet consectetur'},
//     // ];
//     // // res.send('<p>home page</p>'); //express npm
//     // res.render('index', { title: 'Home',blogs});
// });


// app.get('/about', (req, res) => {
//     // res.send('<p>about page</p>'); //express npm
//     res.render('about', { title: 'About'});
// });

// //blog routes
// app.get('/blogs', (req, res) => {
//     console.log('masuk')
//     Blog.find()
//     .then((result)=> {
//         res.render('index', { title: 'All Blogs', blogs: result})
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// });

// app.post('/blogs', (req, res) => {
//     const blog = new Blog(req.body);

//     blog.save()
//         .then(() =>{
//             res.redirect('/blogs');
//         })
//         .catch((err) =>{
//             console.log(err);
//         })
// })

// app.get('/blogs/:id', (req, res) => {
//     const id = req.params.id;
//     Blog.findById(id)
//     .then(result => {
//         res.render('details', { blog: result, title: 'Blog Details'});
//     })
//     .catch(err => {
//         console.log(err);
//     });
// })

// app.delete('/blogs/:id', (req, res) => {
//     const id = req.params.id;

//     Blog.findByIdAndDelete(id)
//     .then(result => {
//         res.json({ redirect: '/blogs'})
//     })
//     .catch(err => {
//         console.log(err);
//     })
// })

// app.get('/blogs/create', (req, res) => {
//     console.log('masuk')
//     res.render('create', { title: 'Create a new page'});
// })


// // redirects
// // app.get('/about-us', (req, res) => {
// //     res.redirect('/about');
// // });


// // 404 page
// app.use((req, res) => {
//     res.status(404).render('404', { title: '404'});
// });