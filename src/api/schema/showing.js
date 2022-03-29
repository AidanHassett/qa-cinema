const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timeOfDay = require("./timeOfDay.js");

mongoose.connect("mongodb://localhost:27017/qa_cinema", {useNewUrlParser: true});

const showing = new Schema ({
  film: {
    type: Schema.Types.ObjectId,
    ref: "Film"
  },
  cinema: {
    type: Schema.Types.ObjectId,
    ref: "Cinema"
  },
  screen: {
    type: String,
    required: true,
    minlength: 1
  },
  ticketPrice: {
    type: Number, //integer of pence
    required: true,
    min: 0
  },
  startTime: timeOfDay
});

module.exports = mongoose.model("Showing", showing);
