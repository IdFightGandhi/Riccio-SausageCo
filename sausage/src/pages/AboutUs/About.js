import React from 'react'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'
import Pic from '../../images/onions.jpg'
import { 
    About, 
    AboutRow, 
    AboutColumn, 
    TextWrapper, 
    topLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,
} from '../../components/AboutSection/AboutSection.elements'
import { homeObjOne } from '../HomePage/Data'


const AboutPage = ({ 
    primary,
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightTextDesc, 
    buttonLabel, 
    description, 
    headline, 
    lightText, 
    topLine,
    img,
    alt,
    start

}) => {
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
                            {/* <Link to='/shop'>
                                <Button big fontBig primary={primary}>
                                {buttonLabel}
                                </Button>
                            </Link> */}
                        </TextWrapper>
                    </AboutColumn>
                    <AboutColumn>
                        <ImgWrapper start={start}>
                            <Img src={Pic} alt={alt}/>
                        </ImgWrapper>
                    </AboutColumn>
                </AboutRow>

            </Container>
        </About>

            
        </>
    )
}

export default AboutPage;
