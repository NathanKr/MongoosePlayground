const Book = require("./models/book").Book;
require('./my_db');

// --- this will be called once the connection is established successfully
Book.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})

