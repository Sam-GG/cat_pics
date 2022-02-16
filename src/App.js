import './App.css';
import Header from './components/Header';
import Cat from './components/Cat';
import React, {useState} from 'react';

function App() {
  const [cat, updateCat] = useState(<Cat/>);

  return (
    <div className="App">
      <Header newCat={function(e){updateCat(<Cat/>)}}/>
      {cat}
    </div>
  );
}

export default App;
