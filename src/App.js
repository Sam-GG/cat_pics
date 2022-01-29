import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./kendrick.png')} className="App-logo" alt="logo" />
        <p>
          Bad Cat
        </p>
        <button>
          good cat
        </button>
        <button>
          bad cat
        </button>
      </header>
    </div>
  );
}

export default App;
