import React from 'react'
import {FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText} from './Footer.elements';

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
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer
