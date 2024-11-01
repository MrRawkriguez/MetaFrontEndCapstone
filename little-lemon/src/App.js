import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
