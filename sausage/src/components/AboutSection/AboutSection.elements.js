import styled from 'styled-components';

export const About = styled.div`
color:${({ lightBg }) => (lightBg ? '#CB333B' : '#fff')};
padding: 80px 0;
background: ${({ lightBg }) => (lightBg ? 'fff' : '#008c45')};
`;

export const AboutRow = styled.div `
display: flex;
margin: 0 -10px -10px -10px;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')
};
`;

export const AboutColumn = styled.div `
margin-bottom: 10px;
padding-right: 10px;
padding-left: 10px;
flex: 1;
max-width: 50%;
flex-basis: 50%;

@media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis:100%;
    display: flex;
    justify-content: center;
}
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;

@media screen and (max-width:768px) {
    padding-bottom: 65px;
}
`

export const topLine = styled.div`
color:${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#4b59f7')};
font-size: 18px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
margin-bottom: 16px;
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
color: ${({lightText}) => (lightText ? '#f77f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

export const ImgWrapper = styled.div`
max-width: 555px;
display: flex;
justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`

export const Img = styled.img `
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 400px;

`



