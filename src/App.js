import React from 'react';
import './App.css';
import NavbarNews from './Navbar';
import News from './CardNews';
// import { render } from 'react-dom';

function App() 
{
  return (
    <div className="App">
      <NavbarNews/>
      <News />
    </div>
  );
}

export default App;
