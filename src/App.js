import './css/HomeStyle.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

import FilmClassification from './components/FilmClassification';

import './css/App.css';
import Home from './components/HomePage/Home';
import NR from './components/Movies/NewReleases/NR';
import SearchPage from './components/Search/SearchPage';
import PlacesToGoPage from './components/About/PlacesToGo/PlacesToGoPage';
import AboutPage from './components/About/About';
import ContactPage from './components/ContactUs/ContactPage';
import LostPage from './components/LostPage';
import Listings from './components/Movies/MovieList/Listings';
import Footer from './components/Footer/Footer';
import DiscussionBoard from './components/Discussions/DiscussionBoard';
import ScreenPage from './components/Screens/MainScreen/ScreenPage';
import TicketBooking from './components/Tickets/TicketPage/TicketBooking' 


function App() {
  return (
    <div className="page-container">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/classifications" element={<FilmClassification />} />
        </Routes>

        <Routes>
          <Route path="/placestogo" element={<PlacesToGoPage />} />
        </Routes>

        <Routes>
          <Route path="/listings" element={<Listings />} />
        </Routes>

        <Routes>
          <Route path="/newreleases" element={<NR />} />
        </Routes>

        <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <Routes>
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Routes>
          <Route path="/search" element={<SearchPage />} />
        </Routes>

        <Routes>
          <Route path="/bookings" element={<TicketBooking />} />
        </Routes>


        <Routes>
          <Route path="/lostpage" element={<LostPage />} />
        </Routes>

        <Routes>
          <Route path="/screens" element={<ScreenPage/>} />
        </Routes>

        <Routes>
          <Route path="/discussions" element={<DiscussionBoard/>} />
        </Routes>

      </Router>

      <Footer />
    </div>
  );
}

export default App;
