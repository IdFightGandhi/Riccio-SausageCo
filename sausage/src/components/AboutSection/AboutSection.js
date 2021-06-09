import React from 'react'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'
import { 
    About, 
    AboutRow, 
    AboutColumn, 
    TextWrapper, 
    topLine,
    Heading,
    Subtitle

} from './AboutSection.elements'


const AboutSection = ({ 
    primary,
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightTextDesc, 
    buttonLabel, 
    description, 
    headline, 
    lightText, 
    topLine  }) => {
    return (
        <>
        <About lightBg={lightBg}>
            <Container>
                <AboutRow imgStart={imgStart}>
                    <AboutColumn>
                        <TextWrapper>
                            <topLine lightTopLine={lightTopLine}>{topLine}</topLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Link to='/shop'>
                                <Button big fontBig primary={primary}>
                                {buttonLabel}
                                </Button>
                            </Link>
                        </TextWrapper>
                    </AboutColumn>
                </AboutRow>

            </Container>
        </About>

            
        </>
    )
}

export default AboutSection
