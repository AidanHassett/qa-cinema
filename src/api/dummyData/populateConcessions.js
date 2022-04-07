const Concession = require("../schema/concession.js");

exports.populateConcessions = function () {

  Concession.insertMany([
    {
      "name": "Popcorn - Sweet",
      "price": 250
    },
    {
      "name": "Popcorn - Salty",
      "price": 250
    },
    {
      "name": "Popcorn - Mixed",
      "price": 250
    },
    {
      "name": "Drink",
      "price": 100
    }
  ])
    .then(() => {console.log("Concessions inserted")})
    .catch((err) => {console.error(err);});
};
