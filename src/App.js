import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './res/logo.svg';
import './css/App.css';
import Home from './components/HomePage/Home';
import NavBar from './components/NavBar/NavBar';
import NR from './components/Movies/NewReleases/NR';
import SearchPage from './components/Search/SearchPage';
import AboutPage from './components/About/About';
import ContactPage from './components/ContactUs/ContactPage';
import LostPage from './components/LostPage';




function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <NR />
      <SearchPage />

    </div>
  );
}

export default App;
