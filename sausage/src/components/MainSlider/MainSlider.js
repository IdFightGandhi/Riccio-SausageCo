import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {Button} from '../../globalStyles'


const IndicatorWrapper = styled.div`

display:flex;
flex-wrap:no-wrap;
position: absolute;
bottom: 15px;
right: 15px;
`

const Dot = styled.div`
width: 16px;
height: 16px;
border-radius:8px;
background-color: white;
opacity: ${(props => props.isActive ? 1 : 0.5 )};
margin: 3px;
transition: 750ms all ease-in-out;
`

const Indicator = ({currentSlide, amountSlides, nextSlide}) => {
    return (
        <IndicatorWrapper>
            {Array(amountSlides)
            .fill(1)
            .map((_, i) => (
            <Dot 
            key={i} 
            isActive={currentSlide === i} 
            onClick={() => nextSlide(i)} 
            />
        ))}</IndicatorWrapper>
    )
}

const Wrapper = styled.div`
height: 80vw;
display: flex;
flex-wrap:nowrap;
overflow-x: hidden;
position:relative;
max-height: 70vh;
`

const Slide = styled.div`
height: auto;
width:100%;
max-width:100%;

display: block;
flex-shrink: 0;
overflow: hidden;
background-position: center;
background-size:cover;
background-repeat:no-repeat;
object-fit: cover;
transition: 750ms all ease-in-out;

`;

const ChildrenWrapper = styled.div`
position:absolute;
top:50%;
left:50%;
transform: translate()(-50%,-50%);
`

const MainSlider = ({ images = [],
     autoPlay = false,
     autoPlayTime = 10000,
     children,
     ...props }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    function nextSlide(slideIndex = currentSlide + 1) {
        const newSlideIndex = slideIndex >= images.length  ? 0 : slideIndex;

        setCurrentSlide(newSlideIndex);

    }

    useEffect(() => {

        const timer = setTimeout(() => {
            nextSlide()
        }, autoPlayTime)

        return() => clearTimeout(timer)

    }, [currentSlide, autoPlayTime])


    return (
        <Wrapper {...props}>
            {images.map((imageUrl, index) => (
                <Slide 
                key={index}
                 style={{
                     backgroundImage: `url(${imageUrl})`, 
                     marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
                    }}
                 ></Slide>
            ))}
            <Indicator 
            currentSlide={currentSlide} 
            amountSlides={images.length}
            nextSlide={nextSlide} 
            />
            <ChildrenWrapper>{children}</ChildrenWrapper>
        </Wrapper>
        )
};


export default MainSlider;