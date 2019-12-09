const Book = require("./models/book").Book;
const db = require("./my_db").db;

db.on("error", () => {
  console.log("db connection error");
});

db.once("open", function() {
  console.log("db is connected successfully");

  const newBook = new Book({ name: "book_", pages: 666, isnew: false });

  // --- insert book
  newBook.save(function(err, book) {
    if (err) return console.error(err);

    console.log("new book is inserted", book);
  });
});
