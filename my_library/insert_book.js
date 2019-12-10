const Book = require("./models/book").Book;
require('./my_db');


const newBook = new Book({ name: "book_", pages: 666, isnew: false });

// --- insert book
// --- this will be called once the connection is established successfully
newBook.save(function(err, book) {
  if (err) return console.error(err);

  console.log("new book is inserted", book);
});

