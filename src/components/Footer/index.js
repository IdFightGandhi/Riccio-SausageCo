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
    SocialIconLink,
    ContactNumber
} from './FooterElements' 


const Footer = () => {
    return (
        <FooterContainer id='footer'>
        <FooterWrap>
            {/* <FooterLinksContainer>
                <FooterLinksWrapper>
                    
                </FooterLinksWrapper>
            </FooterLinksContainer> */}
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        Riccio's Sausage Company
                    </SocialLogo>
                    <ContactNumber>`(425) 496-0802</ContactNumber>
                    <WebsiteRights>Riccio's Sausage Co © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                            {/* <FaInstagram /> */}
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
