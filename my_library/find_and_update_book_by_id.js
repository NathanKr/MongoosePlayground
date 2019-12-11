const Book = require("./models/book").Book;
require('./my_db');

let updatedInfo = {};

const _id = process.argv[2];
const name = process.argv[3];
const pages = Number(process.argv[4]);
const isnew = (process.argv[5] == 'true'); 

// ------- todo change updatedInfo

// --- this will be called once the connection is established successfully
Book.findByIdAndUpdate(_id,updatedInfo, function (err, book) {
  if (err) return console.error(err);
  console.log(book ? 'book is updated successfully' : `book _id : ${_id} was not found`);
})

