import React from 'react';
import './App.css';
import Routes from './Routes' ;
import Navigation from './components/Navigation' ;

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
