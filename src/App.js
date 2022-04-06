import logo from './res/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import OpeningTimes from './components/OpeningTimes';
import Listings from './components/Listings';
import DiscussionBoard from './components/Discussions/DiscussionBoard';

function App() {
  return (
    <div className="App">
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
      {/* <OpeningTimes/> */}
      {/* <Listings/> */}
      <DiscussionBoard/>
    </div>
  );
}

export default App;
