import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Img
} from './Navbar.elements.js';
import logo from '../../images/logo.jpg'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <Img src={logo} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/products' activeStyle>
            Products
          </NavLink>
          <NavLink to='/services' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          {/* <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Store Coming Soon</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;