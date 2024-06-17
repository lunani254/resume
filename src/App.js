
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Description from './Description';
import Tech from './Tech';
import Portfolio from './Portfolio';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Description />
      <Tech />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
