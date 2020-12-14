import React from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Carousel from './component/carousel/carousel'
import About from './component/About/about'
import Services from './component/Services/Services'
import Contact from './component/contact/contact'
import Footer from './component/Footer/footer'


function App() {
  return (
    <div className="container">
      <Navbar />
      <Carousel />
      <About/>
      <Services/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
