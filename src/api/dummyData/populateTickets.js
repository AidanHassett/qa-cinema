const Ticket = require("../schema/ticket.js");
const Customer = require("../schema/customer.js");
const Showing = require("../schema/showing.js");
const Concession = require("../schema/concession.js");

exports.populateTickets = function () {

  let user1;
  let user2;
  let user3;

  const findUser1 = Customer.findOne({email: 'sapien.aenean.massa@protonmail.net'}, ["_id"])
    .then((result) => {user1 = result._id});

  const findUser2 = Customer.findOne({email: 'lorem@google.couk'}, ["_id"])
    .then((result) => {user2 = result._id});

  const findUser3 = Customer.findOne({email: 'nisi.a@google.ca'}, ["_id"])
    .then((result) => {user3 = result._id});

  let show1;
  let show2;

  const findShow1 = Showing.findById("624ac56b6299d737f4ef9ee2", ["_id"])
    .then((result) => {show1 = result._id});

  const findShow2 = Showing.findById("624ac56b6299d737f4ef9ee3", ["_id"])
    .then((result) => {show2 = result._id});

  let concessions = [];

  let findConcessions = Concession.find()
    .then((result) => {
      result.forEach((con) => {
        concessions.push(con._id);
      });
    });


  (async () => {
    await findUser1;
    await findUser2;
    await findUser3;
    await findShow1;
    await findShow2;
    await findConcessions;
  })()
    .then(() => {

      let tickets = [
        new Ticket ({
          "showing": show1,
          "customer": user1,
          "seat": [{"row": 1, "col": 1}],
          "childTicket": false,
          "concessions": []
        }),
        new Ticket ({
          "showing": show1,
          "customer": user2,
          "seat": [{"row": 1, "col": 2}],
          "childTicket": false,
          "concessions": [
            {
              "item": concessions[0],
              "quantity": 1
            },
            {
              "item": concessions[1],
              "quantity": 2
            }
          ]
        }),
        new Ticket ({
          "showing": show1,
          "customer": user3,
          "seat": [{"row": 1, "col": 3}],
          "childTicket": true,
          "concessions": [
            {
              "item": concessions[0],
              "quantity": 1
            }
          ]
        }),
        new Ticket ({
          "showing": show2,
          "customer": user2,
          "seat": [{"row": 1, "col": 2}],
          "childTicket": false,
          "concessions": [
            {
              "item": concessions[2],
              "quantity": 1
            },
            {
              "item": concessions[3],
              "quantity": 1
            }
          ]
        })
      ];

      tickets.forEach((t) => {
        t.populate("showing");
        t.populate("customer");
        t.concessions.forEach((item, i) => {
          t.populate("concessions." + i + ".item");
        });
      });

      Ticket.insertMany(tickets)
        .then(() => {console.log("Tickets inserted")})
        .catch((err) => {console.error(err);});
    });
};
