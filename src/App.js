import React from 'react';
import './App.css';
import Navbar from './navbar';
import Footer from './Footer';
import Description from './Description';
import Tech from './Tech';
import Portfolio from './Portfolio';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      <Description/>
      <Tech/>
      <Portfolio/>
    </div>
  );
}

export default App;
