import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import './Navbar.css'
import Logo from '../headerLogo.png'
import {FaTimes, FaBars} from 'react-icons/fa'
import Scroll from 'react-scroll';


var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;


class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
handleClick = () => {
  this.setState({clicked: !this.state.clicked})
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


  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo"><img src={Logo} /></div>
        <div className="menu-icon" onClick={this.handleClick}>
          {this.state.clicked ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((Items, index) => {
            return (
              <li key={index}>
                <a className={Items.cName} href={Items.url}>
                  {Items.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
