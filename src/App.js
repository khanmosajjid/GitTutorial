
import React, { useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'bootstrap';
import './App.css';
import Header from "./header/header";
import Home from "./Home/Home";
import Footer from "./footer/footer";
import jQuery from 'jquery';
import $ from 'jquery';
import './assets/js/modern_canvas';




function App(){

   return (
    <>
      <canvas id="banner_canvas"></canvas>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
