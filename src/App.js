// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './res/logo.svg';
import './css/App.css';
import Home from './components/HomePage/Home';
import NavBar from './components/NavBar/NavBar';
import NR from './components/Movies/NewReleases/NR';
import SearchPage from './components/Search/SearchPage';



function App() {
  return (
    <div className="App"> 
    <NavBar/>
   <Home/>
   <NR/>
   <SearchPage/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
