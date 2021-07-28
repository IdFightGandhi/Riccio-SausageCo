import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle, 
    FooterLink
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Ricci's Sausage Company</FooterLinkTitle>
                            <FooterLink to="/about">About Us</FooterLink>
                            <FooterLink to="/about">Products</FooterLink>
                            <FooterLink to="/about">Follow Us!</FooterLink>
                            {/* <FooterLink to="/about">Follow Us!</FooterLink> */}
                            {/* <FooterLink to="/about">Follow Us!</FooterLink> */}
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
