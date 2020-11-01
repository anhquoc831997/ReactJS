import React, { Component } from 'react';
import Product from './components/Product';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import News from './components/News';
import Contact from './components/Contact';

import { Link } from "react-router-dom";
import App from './App';
import ProductListApp from './pages/ProductListApp/ProductListApp';

class Home extends Component {
  render() {

    return (
      <div>
      <Header/>
      <ProductListApp />
      <News />
      <About />
      <Contact />
      <Footer/>

      </div>
    );
  }
}

export default Home;
