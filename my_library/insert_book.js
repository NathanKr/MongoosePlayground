const Book = require("./models/book").Book;
require('./my_db');

let name, pages,isnew;

function getCommandLineArguments(){
  name = process.argv[2] ? process.argv[2] : "book1";
  pages = Number(process.argv[3]) ? Number(process.argv[3]) : 123;
  isnew = (process.argv[4] == 'true'); 
}

getCommandLineArguments();

const newBook = new Book({ name, pages, isnew });

// --- insert book
// --- this will be called once the connection is established successfully
newBook.save(function(err, book) {
  if (err) return console.error(err);

  console.log("new book is inserted", book);
});

