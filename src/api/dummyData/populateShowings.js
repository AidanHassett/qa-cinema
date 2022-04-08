const Showing = require("../schema/showing.js");
const Film = require("../schema/film.js");
const Cinema = require("../schema/cinema.js");

exports.populateShowings = function () {

  let pirates;
  let littleThings;
  let anaconda;
  let gilbertGrape;
  let departed;

  const findPirates = Film.findOne({title: "Pirates of the Carribean: The Curse of the Black Pearl"}, ["_id"])
    .then((result) => {pirates = result._id;});

  const findLittleThings = Film.findOne({title: "The Little Things"}, ["_id"])
    .then((result) => {littleThings = result._id;});

  const findAnaconda = Film.findOne({title: "Anaconda"}, ["_id"])
    .then((result) => {anaconda = result._id;});

  const findGilbertGrape = Film.findOne({title: "What's Eating Gilbert Grape"}, ["_id"])
    .then((result) => {gilbertGrape = result._id;});

  const findDeparted = Film.findOne({title: "The Departed"}, ["_id"])
    .then((result) => {departed = result._id;});

  let cine1;
  let cine2;

  const findCine1 = Cinema.findOne({name: "Cinema 1"}, ["_id"])
    .then((result) => {cine1 = result._id;});

  const findCine2 = Cinema.findOne({name: "Cinema 2"}, ["_id"])
    .then((result) => {cine2 = result._id;});

  (async () => {
    await findPirates;
    await findLittleThings;
    await findAnaconda;
    await findGilbertGrape;
    await findDeparted;
    await findCine1;
    await findCine2;
  })()
    .then(() => {
      let showings = [
        new Showing ({
          "film": pirates,
          "cinema": cine1,
          "screen": "A",
          "ticketPrice": 650,
          "startTime": new Date("2022-04-09T18:00")
        }),
        new Showing ({
          "film": pirates,
          "cinema": cine1,
          "screen": "A",
          "ticketPrice": 650,
          "startTime": new Date("2022-04-09T21:00")
        }),
        new Showing (
        {
          "film": departed,
          "cinema": cine1,
          "screen": "B",
          "ticketPrice": 650,
          "startTime": new Date("2022-04-09T18:00")
        }),
        new Showing (
        {
          "film": departed,
          "cinema": cine1,
          "screen": "B",
          "ticketPrice": 650,
          "startTime": new Date("2022-04-09T18:00")
        }),
        new Showing (
        {
          "film": departed,
          "cinema": cine1,
          "screen": "B",
          "ticketPrice": 650,
          "startTime": new Date("2022-04-09T21:30")
        }),
        new Showing (
        {
          "film": littleThings,
          "cinema": cine2,
          "screen": "B",
          "ticketPrice": 950,
          "startTime": new Date("2022-04-09T18:00")
        }),
        new Showing (
        {
          "film": littleThings,
          "cinema": cine2,
          "screen": "B",
          "ticketPrice": 950,
          "startTime": new Date("2022-04-09T21:00")
        }),
        new Showing (
        {
          "film": anaconda,
          "cinema": cine2,
          "screen": "A",
          "ticketPrice": 950,
          "startTime": new Date("2022-04-09T18:00")
        }),
        new Showing (
        {
          "film": gilbertGrape,
          "cinema": cine2,
          "screen": "A",
          "ticketPrice": 950,
          "startTime": new Date("2022-04-09T20:00")
        })
      ];

      showings.forEach((sh) => {
        sh.populate("film");
        sh.populate("cinema");
      });

      Showing.insertMany(showings)
        .then(() => {console.log("Showings inserted")})
        .catch((err) => {console.error(err);});
    });
};
