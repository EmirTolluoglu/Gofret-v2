const mongoose = require('mongoose');
const { find } = require('./models/Post');
const Post = require('./models/Post');

mongoose.connect('mongodb://127.0.0.1/haydarpasa_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));



// Post.find({ }, (error, post) => {
//     console.log(error, post);
// })

// Post.findById('636df3b02b9b6585277b2155', (error, post) => {
//     console.log(error, post);
// })

// Post.findByIdAndUpdate('636df3b02b9b6585277b2155', {
//     title: 'New Title'
// }, (error, post) => {
//     console.log(error, post);
// })

// Post.findByIdAndRemove('636df3b02b9b6585277b2155', (error, post) => {
//     console.log(error, post);
// })


// Post.create({
//     title: 'bu4uncu post',
//     content: 'This is my first post'
// }, (error, post) => {
//     console.log(error, post);
// })