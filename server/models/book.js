let mongoose = require('mongoose');

//Create a model class
let bookModel = mongoose.Schema({
    name: String,
    number: Number,
    emailaddress: String
},
{
    collection:"books"
});

module.exports = mongoose.model('Book', bookModel);