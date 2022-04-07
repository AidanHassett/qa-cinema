const populateCinemas = require('./populateCinemas.js');
const populateConcessions = require('./populateConcessions.js');
const populateCustomers = require('./populateCustomers.js');
const populateFilms = require('./populateFilms.js');
const populateShowings = require('./populateShowings.js');
const populateTickets = require('./populateTickets.js');

populateCinemas.populateCinemas();
populateConcessions.populateConcessions();
populateCustomers.populateCustomers();
populateFilms.populateFilms();
populateShowings.populateShowings();
populateTickets.populateTickets();
