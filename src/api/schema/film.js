const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/qa_cinema", {useNewUrlParser: true});

const comment = new Schema ();
comment.add ({
  poster: {
    type: Schema.Types.ObjectId,
    ref: "Customer"
  },
  content: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 256
  },
  timestamp: {
    type: Date,
    default: new Date()
  },
  replies: {
    type: [comment],
    select: false
  }
});

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
  poster: { //path to image file
    type: String
  },
  director: {
    type: String,
    required: true,
    minlength: 1
  },
  classification: {
    type: String,
    enum: ["U", "12A", "12", "15", "18", "R18", ""],  // "" (empty) represents unknown age rating
    default: ""
  },
  release: {
    type: Date,
    required: true,
    min: new Date("1888-01-01")
  },
  duration: { //integer of minutes
    type: Number,
    required: true,
    min: 0
  },
  cast: [role],
  comments: {
    type: [comment],
    select: false
  }
});

module.exports = mongoose.model("Film", film);
