import styled from 'styled-components'
import { GiSausage } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles'

export const Nav = styled.nav`
background: #CB333B;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
position: sticky;
top: 0;
z-index:999;
`

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`;

export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`

export const NavIcon = styled(GiSausage)`
margin-right: 0.5rem;
`

export const MobileIcon = styled.div`
display: none;


@media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate()(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;

}
`