const {ObjectId} = require("mongoose");

const Film = require("../schema/film.js");
const Customer = require("../schema/customer.js");

exports.populateFilms = function () {

  let user1;
  let user2;
  let user3;
  const findUser1 = Customer.findOne({email: 'sapien.aenean.massa@protonmail.net'}, ["_id"])
    .then((result) => {user1 = result._id});
  const findUser2 = Customer.findOne({email: 'lorem@google.couk'}, ["_id"])
    .then((result) => {user2 = result._id});
  const findUser3 = Customer.findOne({email: 'nisi.a@google.ca'}, ["_id"])
    .then((result) => {user3 = result._id});

  (async () => {
    await findUser1;
    await findUser2;
    await findUser3;
  })()
    .then(() => {
      let pirates = new Film ({
        "title": "Pirates of the Carribean: The Curse of the Black Pearl",
        "description": "Blacksmith Will Turner teams up with eccentric pirate \"Captain\" Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
        "poster": "PiratesOfTheCarribeanCurseOfTheBlackPearl.webp",
        "director": "Gore Verbinski",
        "classification": "12A",
        "release": new Date("2003-07-19"),
        "duration": 143,
        "cast": [
          {"actor": "Johnny Depp", "character": "Jack Sparrow"},
          {"actor": "Geoffrey Rush", "character": "Barbarossa"},
          {"actor": "Orlando Bloom", "character": "Will Turner"},
          {"actor": "Keira Knightley", "character": "Elizabeth Swann"}
        ],
        "comments": []
      });

      let littleThings = new Film ({
        "title": "The Little Things",
        "description": "Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city.",
        "poster": "TheLittleThings.jpg",
        "director": "John Lee Hancock",
        "classification": "15",
        "duration": 128,
        "release": new Date("2021-03-11"),
        "cast": [
          {"actor": "Denzel Washington", "character": "Joe \"Deke\" Deacon"},
          {"actor": "Rami Malek", "character": "Jim Baxter"},
          {"actor": "Jared Leto", "character": "Albert Sparma"},
          {"actor": "Chris Bauer", "character": "Detective Sal Rizoli"}
        ],
        "comments": []
      });

      let anaconda = new Film ({
        "title": "Anaconda",
        "description": "A \"National Geographic\" film crew is taken hostage by an insane hunter, who forces them along on his quest to capture the world's largest - and deadliest - snake.",
        "poster": "Anaconda.jpg",
        "director": "Luis Llosa",
        "classification": "15",
        "release": new Date("1997-05-9"),
        "duration": 89,
        "cast": [
          {"actor": "John Voight", "character": "Paul Serone"},
          {"actor": "Jennifer Lopez", "character": "Terri Flores"},
          {"actor": "Eric Stoltz", "character": "Dr Steven Cale"},
          {"actor": "Ice Cube", "character": "Danny Rich"},
          {"actor": "Jonathan Hyde", "character": "Warren Westridge"},
          {"actor": "Owen Wilson", "character": "Gary Dixon"}
        ],
        "comments": []
      });

      let gilbertGrape = new Film ({
        "title": "What's Eating Gilbert Grape",
        "description": "A young man in a small Midwestern town struggles to care for his mentally-disabled younger brother and morbidly obese mother while attempting to pursue his own happiness.",
        "poster": "WhatsEatingGilbertGrape.jpg",
        "director": "Lasse Hallström",
        "classification": "12",
        "release": new Date("1994-03-04"),
        "duration": 118,
        "cast": [
          {"actor": "Johnny Depp", "character": "Gilbert Grape"},
          {"actor": "Leonardo DiCaprio", "character": "Arnie Grape"},
          {"actor": "Juliette Lewis", "character": "Becky"},
          {"actor": "Mary Steenburgen", "character": "Betty Carver"},
          {"actor": "Darlene Cates", "character": "Momma"}
        ],
        "comments": []
      });

      let departed = new Film ({
        "title": "The Departed",
        "description": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
        "poster": "TheDeparted.jpg",
        "director": "Martin Scorsese",
        "classification": "18",
        "release": new Date("2006-10-06"),
        "duration": 151,
        "cast": [
          {"actor": "Leonardo DiCaprio", "character": "Billy"},
          {"actor": "Matt Damon", "character": "Colin"},
          {"actor": "Jack Nicholson", "character": "Costello"},
          {"actor": "Mark Wahlberg", "character": "Dignam"},
          {"actor": "Martin Sheen", "character": "Queenan"}
        ],
        "comments": [
          {
            "poster": user1,
            "content": "I like this film",
            "replies": [
              {
                "poster": user2,
                "content": "You're wrong and I hate you",
                "replies": []
              }
            ]
          },
          {
            "poster": user1,
            "content": "This film is terrible",
            "replies": []
          }
        ]
      });

      departed.populate("comments.0.poster");
      departed.populate("comments.0.replies.0.poster");
      departed.populate("comments.1.poster");


      Film.insertMany([
        pirates,
        littleThings,
        anaconda,
        gilbertGrape,
        departed
      ])
        .then(() => {console.log("Films inserted")})
        .catch((err) => {console.error(err);});
    });

};
