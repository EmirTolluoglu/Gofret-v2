const express = require('express');
const userRoot = require('./routes/users');
const mainRoot = require('./routes/main');
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
//mongoose
const mongoose = require('mongoose');
//body-parser
const bodyParser = require('body-parser');
//socket io
const socket = require('socket.io');
//google calendar

const path = require('path');
const app = express();
const port = 3000;
app.use(express.static('/public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//mongoose
mongoose.connect('mongodb://127.0.0.1/haydarpasa_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.static('public'));
app.use('/', mainRoot);
app.use('/users', userRoot);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));