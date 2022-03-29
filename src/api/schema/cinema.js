const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timeOfDay = require("./timeOfDay.js");

mongoose.connect("mongodb://localhost:27017/qa_cinema", {useNewUrlParser: true});

const placeToGo = new Schema ({
  name: {
    type: String,
    required: true,
    minlength: 1
  },
  address: {
    type: String,
    required: true,
    minlength: 1
  },
  postcode: {
    type: String,
    required: true,
    minlength: 1
  },
  description: {
    type: String,
    required: true,
    minlength: 1
  }
});

const cinemaScreen = new Schema ({
  name: {
    type: String,
    required: true,
    minlength: 1
  },
  type: {
    type: String,
    required: true,
    minlength: 1
  },
  seats: [{
    rows: {
      type: Number,
      required: true,
      min: 1
    },
    cols: {
      type: Number,
      required: true,
      min: 1
    }
  }]
});

const cinema = new Schema ({
  name: {
    type: String,
    required: true,
    minlength: 1
  },
  address: {
    type: String,
    required: true,
    minlength: 1
  },
  postcode: {
    type: String,
    required: true,
    minlength: 1
  },
  directions: {
    type: String,
    required: true,
    minlength: 1
  },
  parking: {
    type: String,
    required: true,
    minlength: 1
  },
  openTime: timeOfDay,
  closeTime: timeOfDay,
  placesToGo: [placeToGo],
  screens: [cinemaScreen]
});

module.exports = mongoose.model("Cinema", cinema);
