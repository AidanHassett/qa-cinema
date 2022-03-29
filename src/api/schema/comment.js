const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/qa_cinema", {useNewUrlParser: true});

const comment = new Schema ({
  poster: {
    type: Schema.Types.ObjectId,
    ref: "Customer"
  },
  content: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 256
  }
});

module.exports = mongoose.model("Comment", comment);
