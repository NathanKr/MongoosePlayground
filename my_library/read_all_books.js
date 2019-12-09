const mongoose = require("mongoose");
const my_db = "my_library";
const Book = require('./models/book').Book;

mongoose.connect(`mongodb://localhost/${my_db}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

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

