import styled from "styled-components";
import bgimg from '../../images/main.jpg'

export const HeroContainer = styled.div`
background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${bgimg}) no-repeat center center/cover;
height: 100vh;

`

export const HeroContent = styled.div`
 position:relative;
 height: 100vh;
`
export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position:absolute;
  bottom:15%;
  max-height: 100%;
  max-width: 600px;
  padding: 0 2rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  /* @media screen and (max-width: 650px) {
    width: 100%;
  } */
`;

export const HeroH1 = styled.h1`
  font-size: clamp(3.3rem, 10vw, 5rem);
  box-shadow: 3px 5px #e31837;
  letter-spacing: 3px;
`;


