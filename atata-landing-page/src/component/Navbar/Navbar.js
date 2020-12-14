import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import './Navbar.css'
import Logo from '../headerLogo.png'
import {FaTimes, FaBars} from 'react-icons/fa'


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
