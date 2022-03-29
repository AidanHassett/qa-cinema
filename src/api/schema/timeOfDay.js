const timeOfDay = new Schema ({
  hour: {
    type: Number,
    required: true,
    min: 0,
    max: 23
  },
  minute: {
    type: Number,
    required: true,
    min: 0,
    max: 59
  }
});

module.exports = timeOfDay;
