import React from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Carousel from './component/carousel/carousel'
import About from './component/About/about'
import Services from './component/Services/Services'
import Contact from './component/contact/contact'
import Footer from './component/Footer/footer'
import Scroll from 'react-scroll';
import {AiOutlineArrowUp} from 'react-icons/ai'


var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class App extends React.Component{
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  
  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  
  render(){
  return (
    <div className="container">
      <Navbar />
      <Carousel />
      <About/>
      <Services/>
      <Contact />
      <Footer />
      <a className='scroll-Top' onClick={this.scrollToTop}>
        <AiOutlineArrowUp />
      Back To Top
      </a>
    </div>
  );
}
}

export default App;
