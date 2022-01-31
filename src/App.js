import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return(
    <>
    <NavBar/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App;