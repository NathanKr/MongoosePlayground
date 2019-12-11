const Book = require("./models/book").Book;
require('./my_db');
const _id = process.argv[2];

// --- this will be called once the connection is established successfully
Book.findById(_id, function (err, book) {
  if (err) return console.error(err);
  console.log(book ? book : `book _id : ${_id} was not found`);
})

