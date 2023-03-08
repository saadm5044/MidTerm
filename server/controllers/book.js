let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a refrence to the model
let Book = require('../models/book');

module.exports.displayBookList = (req, res, next) => {
    Book.find((err, BookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('book/list',{title: 'Book List', BookList: BookList,displayName: req.user ? req.user.displayName :''});
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('book/add', {title: 'Add Books'})
}

module.exports.processAddPage = (req, res, next) => {
    let newBook = Book({
       "name": req.body.name,
       "author": req.body.author,
       "published": req.body.published,
       "description": req.body.description,
       "price": req.body.price

     });
 
     Book.create(newBook, (err, Book) =>{
         if(err)
         {
             console.log(err);
             res.end(err);
         }
         else
         {
             // refresh the book list
             res.redirect('/book-list');
         }
     });
 
 }

 module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Book.findById(id, (err, bookToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show  the edit view
            res.render('book/edit', {title:'Edit Book', book: bookToEdit,
            displayName: req.user ? req.user.displayName :''})
        }
    })
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id
    
    let updatedBook = Book({
      "_id": id,
      "name": req.body.name,
       "author": req.body.author,
       "published": req.body.published,
       "description": req.body.description,
       "price": req.body.price,

    });

    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/book-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/book-list');
        }
    });
}