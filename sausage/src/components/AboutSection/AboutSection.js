import React from 'react'
import { About, AboutRow, AboutColumn, TextWrapper } from './AboutSection.elements'
import { Container } from '../../globalStyles'

const AboutSection = ({ lightBg, imgStart }) => {
    return (
        <>
        <About lightBg={lightBg}>
            <Container>
                <AboutRow imgStart={imgStart}>
                    <AboutColumn>
                        <TextWrapper>
                            Hi
                        </TextWrapper>
                    </AboutColumn>
                </AboutRow>

            </Container>
        </About>

            
        </>
    )
}

export default AboutSection
