const Book = require("./models/book").Book;
require('./my_db');

// --- this will be called once the connection is established successfully
Book.deleteMany({},function (err, result) {
  if (err) return console.error(err);
  console.log('all books deleted successfully',result);
})

