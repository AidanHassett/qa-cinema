const router = require("express").Router();

const Customer = require("./schema/customer.js");
const Ticket = require("./schema/ticket.js");
const Concession = require("./schema/concession.js");
const Showing = require("./schema/showing.js");
const Cinema = require("./schema/cinema.js");
const Film = require("./schema/film.js");

// CREATE



// READ

  // Films

router.get("/getAllFilms", (req, res, next) => {
  Film.find({}, [], (err, films) => {
    if (err) {
      return next({status: 400, message: err.message});
    } else {
      return res.json(films);
    }
  });
});

router.get("/getFilm/:id", (req, res, next) => {
  const id = req.params.id;

  Film.findById(id, {}, [], (err, film) => {
    if (err) {
      return next({status: 400, message: err.message});
    } else {
      return res.json(film);
    }
  });
});

router.get("/getComments/:filmId", (req, res, next) => {
  const filmId = req.params.filmId;
  const replyTrace = req.body;
  /*
   *  Returns: If body is empty, the comments associated with a film.
   *    Replies will be replaced with a boolean indicating if there are replies
   *
   *  To get the replies to a comment, pass in to the body an array containing the id of the comment whose replies you want.
   *  If that is itself a reply, the array should contain the comment to which that is a reply, then the id of that comment.
   *  e.g if a is a reply to b and b is a reply to c, the array [c._id, b._id, a._id] would be passed to return the replies to a.
   *
   */

  Film.findById(filmId, {}, [], (err, film) => {
    if (err) {
      return next({status: 400, message: err.message});
    } else {
      let comments = film.comments;
      for (var i = 0; i < replyTrace.length; i++) {
        comments = comments.find((element) => {
          return element._id.equals(replyTrace[i])
        });
        if (comments == undefined) {
          return next({status: 404, message: "Invalid comment reply trace"});
        } else {
          comments = comments.replies;
        }
      }

      let result = [];

      comments.forEach((com) => {
        result.push({
          "_id": com._id,
          "poster": com.poster,
          "content": com.content,
          "timestamp": com.timestamp,
          "replies": (com.replies.length !== 0 && com.replies !== undefined)  // true if this comment has replies, otherwise false
        });
      });

      return res.json(result);
    }
  }).select("comments");
});

  // Cinemas

router.get("/getAllCinemas", (req, res, next) => {
  Cinema.find({}, [], (err, cinemas) => {
    if (err) {
      return next({status: 400, message: err.message});
    } else {
      return res.json(cinemas);
    }
  });
});

router.get("/getCinema/:id", (req, res, next) => {
  const id = req.params.id;

  Cinema.findById(id, {}, [], (err, cinema) => {
    if (err) {
      return next({status: 400, message: err.message});
    } else {
      return res.json(cinema);
    }
  });
});

  // Customers

router.get("/getAllCustomers", (req, res, next) => {
  Customer.find({}, [], (err, customers) => {
    if (err) {
      return next({status: 400, message: err.message});
    } else {
      return res.json(customers);
    }
  });
});

router.get("/getCustomer/:id", (req, res, next) => {
  const id = req.params.id;

  Customer.findById(id, {}, [], (err, customer) => {
    if (err) {
      return next({status: 400, message: err.message});
    } else {
      return res.json(customer);
    }
  });
});

  // Showings

router.get("/getAllShowings", (req, res, next) => {
  Showing.find({}, [], (err, showings) => {
    if (err) {
      return next({status: 400, message: err.message});
    } else {
      return res.json(showings);
    }
  });
});

router.get("/getShowing/:id", (req, res, next) => {
  const id = req.params.id;

  Showing.findById(id, {}, [], (err, showing) => {
    if (err) {
      return next({status: 400, message: err.message});
    } else {
      return res.json(showing);
    }
  });
});

  // Concessions

router.get("/getAllConcessions", (req, res, next) => {
  Concession.find({}, [], (err, concessions) => {
    if (err) {
      return next({status: 400, message: err.message});
    } else {
      return res.json(concessions);
    }
  });
});

router.get("/getConcession/:id", (req, res, next) => {
  const id = req.params.id;

  Concession.findById(id, {}, [], (err, concession) => {
    if (err) {
      return next({status: 400, message: err.message});
    } else {
      return res.json(concession);
    }
  });
});

  // Tickets

router.get("/getAllTickets", (req, res, next) => {
Ticket.find({}, [], (err, tickets) => {
  if (err) {
    return next({status: 400, message: err.message});
  } else {
    return res.json(tickets);
  }
});
});

router.get("/getTicket/:id", (req, res, next) => {
const id = req.params.id;

Ticket.findById(id, {}, [], (err, ticket) => {
  if (err) {
    return next({status: 400, message: err.message});
  } else {
    return res.json(ticket);
  }
});
});

// UPDATE



// DELETE



module.exports = router;
