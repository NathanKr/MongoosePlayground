const Book = require("./models/book").Book;
require("./my_db");

const _id = process.argv[2];
const name = process.argv[3] ? process.argv[3] : "book name updated";

// --- only name is upated

const filter = { _id };
const update = { name };

// --- this will be called once the connection is established successfully
Book.findOneAndUpdate(
  filter,
  { $set: update },
  { useFindAndModify: false }, // --- this removes warning
  function(err, book) {
    if (err) return console.error(err);
    console.log(book ? book : `book _id : ${_id} was not found`);
  }
);
