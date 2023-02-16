import React, { useState } from 'react'
import styled from 'styled-components'
import { productDataTwo } from "./Data"

function ProductCategoryTwo() {

    const [pdata2, setPdata] = useState(productDataTwo);
  return (
    <ProductsContainer>
    <ProducHeading>
      Choose your favorite
    </ProducHeading>
    <ProductWrapper>
      {
        pdata2.map((elem, index) => {
          return (
            <Productcard key={index}>
              <ProductImg src={elem.img} alt={elem.alt} />
              <ProductInfo>
                <ProductTitle>{elem.name}</ProductTitle>
                <ProductDesc>{elem.desc}</ProductDesc>
                <ProductPrice>{elem.price}</ProductPrice>
                <ProductButton>{elem.button}</ProductButton>
              </ProductInfo>
            </Productcard>
          )
        })
      }
    </ProductWrapper>
  </ProductsContainer>
  )
}

const ProductsContainer = styled.div`
  min-width:100vh;
  min-height:100vh;
  background:black;
  padding: 5rem ;
  @media screen and (max-width:400px){
        width:100%;
    }
`

const ProducHeading = styled.div`
    height:40px;
    padding: 30px 0;
    text-align:center;
    margin-bottom: 8rem;
      color:white;
      font-size: clamp(2rem, 2.5vw, 3rem);
      letter-spacing:4px;
      text-transform:uppercase;
    
`

const ProductWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  padding:10px 0 ;
  justify-content:center;
`

const Productcard = styled.div`
  margin: 0 4rem;
  width:400px;
  min-width: 400px;
  line-height:2;
  
`

const ProductImg = styled.img`
    height: 400px;
  min-width: 400px;
  box-shadow: 8px 8px #fdc500;
`

const ProductInfo =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   padding:2rem 0; 
  
   
`

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  color:white;
  word-spacing: 1px;
  letter-spacing:3px;
`

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  color:white;
  margin:20px 0;
  font-size:18px;
  text-align:center
  word-spacing: 1px;
  letter-spacing:3px;
`

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
  color:white;
  word-spacing: 1px;
  letter-spacing:3px;
`

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
 `

export default ProductCategoryTwo