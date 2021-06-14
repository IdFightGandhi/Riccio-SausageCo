import React from 'react'
import { FaFacebook, FaInstagram, } from 'react-icons/fa'
import {
    FooterContainer, 
    FooterSubscription, 
    FooterSubHeading, 
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLink,
    FooterLinksItems,
    FooterLinkTitle,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    SocialIcons,
    SocialIconLink,
    WebsiteRights

} from './Footer.elements';
import { Button } from '../../globalStyles'

const Footer = () => {
    return (
        <FooterContainer>
            {/* <FooterSubscription>
                <FooterSubHeading>
                    Text
                </FooterSubHeading>
                <FooterSubText>
                    More Text
                </FooterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder="Your Email"/>
                        <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription> */}
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    {/* <FooterLinksItems>
                        <FooterLinkTitle>
                            About Us
                        </FooterLinkTitle>
                        <FooterLink to='/about'>Our Story</FooterLink>
                        <FooterLink to='/contact'>Contact Us</FooterLink>
                        <FooterLink to='/'>Where to Find Us</FooterLink>
                        <FooterLink to='/'>Shop</FooterLink>
                    </FooterLinksItems> */}
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Contact Us
                        </FooterLinkTitle>
                        <FooterLink to='/contact'>Instagram</FooterLink>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        {/* <SocialIcon>
                            test
                        </SocialIcon> */}
                        <WebsiteRights>Riccio's Sausage Company © 2021</WebsiteRights>
                        
                    </SocialLogo>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
