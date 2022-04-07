const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/qa_cinema", {useNewUrlParser: true});

const customer = new Schema ({
  email: {
    type: String,
    required: true,
    minlength: 1
  },
  name: {
    type: String,
    required: true,
    minlength: 1
  },
  password: {
    type: String,
    required: true,
    maxlength: 512,
    select: false
  },
  salt: {
    type: String,
    required: true,
    minlength: 1,
    select: false
  }
});

module.exports = mongoose.model("Customer", customer);
