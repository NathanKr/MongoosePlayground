const mongoose = require("mongoose");
const my_db = "my_library";

mongoose.connect(`mongodb://localhost/${my_db}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

module.exports.db = db;

