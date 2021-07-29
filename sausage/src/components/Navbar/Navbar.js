import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import logo from '../../images/logo.jpg'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  // NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  // NavItemBtn,
  NavLinks,
  NavBtnLink,
  Img
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              
              <Img src = {logo} alt='logo' />
              Riccio's Sausage Company
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks href='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="#story" onClick={closeMobileMenu}>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="#products" onClick={closeMobileMenu}>
                  Products
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href='#footer' onClick={closeMobileMenu}>
                  Contact
                </NavLinks>
              </NavItem>
              {/* <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/store'>
                    <Button primary>Buy Online</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/store'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SHOP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn> */}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
