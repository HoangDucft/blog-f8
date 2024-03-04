// path directory
const path = require('path');

//express farmwork use to code backend
const express = require('express');

//dùng để logger
const morgan = require('morgan');

//express handlebar template giúp code file html ...
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));


// HTTP logger
app.use(morgan('combined'));

//config name handlebars dictionary
app.engine('.hbs', engine({extname: '.hbs'}));

// Template engine
app.engine('handlebars', engine());
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));


// khi đường truyên là '/' thì nó sẽ render trang home.hbs
app.get('/', (req, res) => {
  res.render('home');
})

// khi đường truyên là '/news' thì nó sẽ render trang news.hbs
app.get('/news', (req, res) => {
  res.render('news');
})

// nếu chạy thành công sẽ log ra nội dung
app.listen(port, () => {
  console.log(`Example app listening on port `)
})