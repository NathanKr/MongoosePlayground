const mongoose = require("mongoose");
const my_db = "my_library";

mongoose.connect(`mongodb://127.0.0.1/${my_db}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// --- this can be issued many times
db.on("error", error =>{
    console.log('db connection error ' , error );
});

// --- this will be issued once
db.once("open", function() {
  console.log('db is connected successfully');
});


