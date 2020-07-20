import React from 'react';
import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Greeting name="Kevin" age="27" />
      <Greeting name="Andrew" age="??" />
      <Greeting name="Bob" age="55" />
    </div>
  );
}

export default App;
