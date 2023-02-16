import React from 'react';
import FeaturePic from "../../images/featured3.jpg";
import styled from "styled-components"

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the Day</h1>
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  )
}

const FeatureContainer =styled.div`
    background:linear-gradient(to right, rgb(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)) , url(${FeaturePic});
    height:100vh;
    min-width:100vh;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
    color:#fff;
    text-align:center;
    padding: 0 1rem;

    h1 {
    font-size: clamp(3rem, 3vw, 5rem);
  }
  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`

export const FeatureButton = styled.button`
    font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;
  &:hover {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`

export default Feature