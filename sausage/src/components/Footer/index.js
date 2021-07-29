import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements' 


const Footer = () => {
    return (
        <FooterContainer id='footer'>
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
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        Ricci's Sausage Company
                    </SocialLogo>
                    <WebsiteRights>Ricci's Sausage Co © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                            <FaInstagram />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
