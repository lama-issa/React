import  { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './items/Footer/Footer';
import Header from './items/Header/Header';
import Navbar from './items/Navbar/Navbar';
import PORTFOLIO from './items/PORTFOLIO/PORTFOLIO';
import NotFound from './items/NotFound/NotFound';
import About from './items/About/About';
import Contact from './items/Contact/Contact';

export default class App extends Component {
state={};
  render() {
    return (
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="portf" element={<PORTFOLIO />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      
      <Footer/>
      </>
    ) 
    
  }
}
