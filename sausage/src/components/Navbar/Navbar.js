import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
// import logo from '../../images/Logo.png'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
 } from './Navbar.elements';

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#CB333B'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon />
                    Riccio's Sausage
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/findstore'>
                            Products
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/about'>
                            About Us
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/contact'>
                            Contact
                        </NavLinks>
                    </NavItem>
                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to="/shop">
                                <Button primary>SHOP COMING SOON</Button>
                            </NavBtnLink>
                        ): (
                            <NavBtnLink to="/shop">
                                <Button fontBig primary>
                                    SHOP COMING SOON
                                </Button>
                            </NavBtnLink>
                        )}
                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
