import React from 'react';
import logo from './logo.svg';
import Contacts from './components/contactForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Hoang Luu</code>
        </p>


      </header>
      <body>
        <Contacts label="Test"/>
        
      </body>
    </div>
  );
}

export default App;
