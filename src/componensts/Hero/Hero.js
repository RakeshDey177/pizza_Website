import React from 'react';
import Navbar from '../Navbar/Navbar';
import imgbg from "../../images/pizza-3.jpg";
import styled from 'styled-components';


function Hero() {


  return (
    <HeroContainer>
        
       
            <HeroItems>
                <HeroHeading>Greatest Pizza Ever</HeroHeading>
                <HeroPara>Ready in 60 Seconds</HeroPara>
                <HeroBtn>Place Order</HeroBtn>
            </HeroItems>        
    </HeroContainer>
  )
}


const HeroContainer =styled.div`
    background:linear-gradient(to right, rgb(0,0,0,0.7), rgba(0,0,0,0.1)), url(${imgbg});
    height:100vh;
    width:100vw;
    min-width:100vh;
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center
    @media screen and (max-width:400px){
      width:100%;
        
    }
`

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroHeading = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

export const HeroPara = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
export default Hero