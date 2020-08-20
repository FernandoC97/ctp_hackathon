import React from 'react';
import './App.css';
import './Welcome.css';
import Content from './Content.js';
import  Button from './Button.js';
import Menu from './Menu.js';
import Events from './Events';
import Jobs from './Jobs';
import Websites from './Websites';

function App() {
  return (
    <div className="App-div">
      <header className="App-header">
        <p>
          The Programming Corner
        </p>
      </header>
      <p className="welcome">Post any resource..</p>
      <Menu />
      <Content />
      <Button />
      <p>Events</p>
      <Events />
      <br></br>
      <p>Learning Websites</p>
      <Websites />
      <br></br>
      <p>Jobs</p>
      <Jobs />
    </div>
  );
}

export default App;
