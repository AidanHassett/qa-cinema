const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/qa_cinema", {useNewUrlParser: true});

const concession = new Schema ({
  name: {
    type: String,
    required: true,
    minlength: 1
  },
  price: {
    type: Number, //integer of pence
    required: true,
    min: 0
  }
});

module.exports = mongoose.model("Concession", concession);
