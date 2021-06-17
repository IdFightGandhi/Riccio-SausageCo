import React from 'react'
import Logo from '../../images/logo.jpg'
import {
    Nav,
    Bars,
    NavMenu,
    NavLink,
    NavBtn,
    NavBtnLink,
    Img
}
from './Navbar.elements'

const Navbar = () => {
    return (
        <Nav>
            <NavLink to="/">
                <Img src={Logo} alt="logo"/>
                
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/" activeStyle>
                    Shop 
                </NavLink>
                <NavLink to="/" activeStyle>
                    Products
                </NavLink>
                <NavLink to="/" activeStyle>
                    About
                </NavLink>
                <NavLink to="/" activeStyle>
                    Contact
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/shop">Shop Coming Soon</NavBtnLink>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
