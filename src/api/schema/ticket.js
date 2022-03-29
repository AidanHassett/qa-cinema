const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/qa_cinema", {useNewUrlParser: true});

const concessionOrder = new Schema ({
  item: {
    type: Schema.Types.ObjectId,
    ref: "Concession"
  },
  quantity: {
    type: int,
    required: true,
    min: 1
  }
});

const ticket = new Schema ({
  showing: {
    type: Schema.Types.ObjectId,
    ref: "Showing"
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer"
  },
  seat: [{
    row: {
      type: int,
      required: true,
      min: 1
    },
    col: {
      type: int,
      required: true,
      min: 1
    }
  }],
  child: {
    type: boolean,
    required: true
  },
  concessions: [concessionOrder]
});

module.exports = mongoose.model("Ticket", ticket);
