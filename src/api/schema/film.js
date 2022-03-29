const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/qa_cinema", {useNewUrlParser: true});

const role = new Schema ({
  actor: {
    type: String,
    required: true,
    minlength: 1
  },
  character: {
    type: String,
    required: true,
    minlength: 1
  }
});

const film = new Schema ({
  title: {
    type: String,
    required: true,
    minlength: 1
  },
  description: {
    type: String,
    required: true,
    minlength: 1
  },
  poster: String,
  director: {
    type: String,
    required: true,
    minlength: 1
  },
  classification: {
    type: String,
    minlength: 1,
    maxlength: 3
  },
  realease: {
    type: Date,
    required: true,
    min: new Date("1888-01-01")
  },
  cast: [role],
  comments: [comment]
});

module.exports = mongoose.model("Film", film);
