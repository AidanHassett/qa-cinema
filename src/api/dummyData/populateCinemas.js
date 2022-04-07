const Cinema = require("../schema/cinema.js");

exports.populateCinemas = function () {

  Cinema.insertMany([
    {
      "name": "Cinema 1",
      "address": "12 Fake Road",
      "postcode": "SW1 1AB",
      "directions": "Go there",
      "parking": "Park anywhere",
      "openTime": [
        {"hour": 9, "minute": 0},
        {"hour": 9, "minute": 0},
        {"hour": 9, "minute": 0},
        {"hour": 9, "minute": 0},
        {"hour": 9, "minute": 0},
        {"hour": 9, "minute": 0},
        {"hour": 10, "minute": 30}
      ],
      "closeTime": [
        {"hour": 23, "minute": 30},
        {"hour": 23, "minute": 30},
        {"hour": 23, "minute": 30},
        {"hour": 23, "minute": 30},
        {"hour": 23, "minute": 30},
        {"hour": 23, "minute": 30},
        {"hour": 22, "minute": 0}
      ],
      "placesToGo": [
        {
          "name": "Home",
          "description": "You sleep there",
          "address": "21 Madeup Lane",
          "postcode": "SW1 2CD"
        },
        {
          "name": "KFC",
          "description": "Serves greasy chicken-like stuff",
          "address": "32 Imaginary Drive",
          "postcode": "SW1 3EF"
        }
      ],
      "screens": [
        {
          "name": "A",
          "type": "standard",
          "seats": [{"rows": 10, "cols": 10}]
        },
        {
          "name": "B",
          "type": "deluxe",
          "seats": [{"rows": 8, "cols": 8}]
        }
      ]
    },
    {
      "name": "Cinema 2",
      "address": "37 Some Street",
      "postcode": "NE1 7XY",
      "directions": "Go there",
      "parking": "Park anywhere",
      "openTime": [
        {"hour": 9, "minute": 0},
        {"hour": 9, "minute": 0},
        {"hour": 9, "minute": 0},
        {"hour": 9, "minute": 0},
        {"hour": 9, "minute": 0},
        {"hour": 9, "minute": 0},
        {"hour": 10, "minute": 30}
      ],
      "closeTime": [
        {"hour": 23, "minute": 30},
        {"hour": 23, "minute": 30},
        {"hour": 23, "minute": 30},
        {"hour": 23, "minute": 30},
        {"hour": 23, "minute": 30},
        {"hour": 23, "minute": 30},
        {"hour": 22, "minute": 0}
      ],
      "placesToGo": [
        {
          "name": "Home",
          "description": "You sleep there",
          "address": "21 Madeup Lane",
          "postcode": "SW1 2CD"
        },
        {
          "name": "Snail and Kale",
          "description": "The disgusting name is to distract you from the disgusting food",
          "address": "74 Somewhere Row",
          "postcode": "NE1 9ZG"
        }
      ],
      "screens": [
        {
          "name": "A",
          "type": "standard",
          "seats": [{"rows": 10, "cols": 10}]
        },
        {
          "name": "B",
          "type": "deluxe",
          "seats": [{"rows": 8, "cols": 8}]
        }
      ]
    }
  ])
    .then(() => {console.log("Cinemas inserted")})
    .catch((err) => {console.error(err);});
};
