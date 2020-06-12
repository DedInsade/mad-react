import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Header from './components/header/header';

const App = () => {
  return ( 
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App
