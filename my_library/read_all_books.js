const Book = require("./models/book").Book;
const db = require("./my_db").db;

db.on("error", () =>{
    console.log('db connection error');
});

db.once("open", function() {
  console.log('db is connected successfully');

  // --- get all
  Book.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })
});

