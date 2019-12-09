const mongoose = require("mongoose");

// --- define a schema
  const bookSchema = new mongoose.Schema({
    name: String ,
    pages : Number,
    // ---- isNew is not valid as a schema key
    isnew : Boolean
  } , 
  {
    collection : 'books'
  });

  // --- define a model
  const Book = mongoose.model('Book', bookSchema);

  module.exports.Book = Book;