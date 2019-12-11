const mongoose = require("mongoose");

// --- define a schema 
// --- add validation here !!!1
  const bookSchema = new mongoose.Schema({
    name: {type : String , required : true } ,
    pages : {type : Number , required : true},
    // ---- isNew is not valid as a schema key
    isnew : Boolean
  } , 
  {
    collection : 'books'
  });

  // --- define a model
  const Book = mongoose.model('Book', bookSchema);

  module.exports.Book = Book;