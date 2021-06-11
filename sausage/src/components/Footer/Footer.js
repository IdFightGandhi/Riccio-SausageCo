import React from 'react'
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
    FooterLinkTitle

} from './Footer.elements';
import { Button } from '../../globalStyles'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
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
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            About Us
                        </FooterLinkTitle>
                        <FooterLink to='/about'>Our Story</FooterLink>
                        <FooterLink to='/contact'>Contact Us</FooterLink>
                        <FooterLink to='/'>Where to Find Us</FooterLink>
                        <FooterLink to='/'>Shop</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Contact Us
                        </FooterLinkTitle>
                        <FooterLink to='/about'>Our Story</FooterLink>
                        <FooterLink to='/contact'>Contact Us</FooterLink>
                        <FooterLink to='/'>Where to Find Us</FooterLink>
                        <FooterLink to='/'>Shop</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Social Media
                        </FooterLinkTitle>
                        <FooterLink to='/about'>Our Story</FooterLink>
                        <FooterLink to='/contact'>Contact Us</FooterLink>
                        <FooterLink to='/'>Where to Find Us</FooterLink>
                        <FooterLink to='/'>Shop</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterContainer>
    )
}

export default Footer
