import React, { useState } from 'react';
import styled from 'styled-components';
import { pizzasData } from './Pizzadata';
import { useDispatch } from 'react-redux';
import { add } from '../../features/cartSlice';

const Pizza = () => {

  const[pizzas,setPizzas] =useState(pizzasData)
  const dispatch = useDispatch();

  const handleAdd = (pizza) => {
    console.log("clicked");
    console.log(pizza);
    dispatch(add(pizza));
}
    return (
        <PizzaConatiner>
            <PizzaHeading>
                Choose Your pizza
            </PizzaHeading>
            <PizzaWrapper>
                {
                    pizzas.map((pizza,index) => {
                        return (
                            <Pizzacard key={index}>
                                <PizzaImg src={pizza.img} alt={pizza.alt} />
                                <PizzaInfo>
                                    <PizzaTitle>{pizza.name}</PizzaTitle>
                                    <Pizzadescripttion>{pizza.desc}</Pizzadescripttion>
                                    <PizzaPrice>{pizza.price}</PizzaPrice>
                                    <PizzaButton  onClick={() => handleAdd(pizza)}>{pizza.button}</PizzaButton>
                                </PizzaInfo>
                            </Pizzacard>
                        )
                    })
                }
            </PizzaWrapper>
        </PizzaConatiner>
    )
}

const PizzaConatiner = styled.div`
    width:100vw;
    min-width:100vh;
  min-height:100vh;
  padding: 1.4rem ;
  background:url("https://images.alphacoders.com/991/991307.jpg");
  background-repeat:no-repeat;
  background-size:cover;
  @media screen and (max-width:400px){
        width:100%;
    }
  
`
const PizzaHeading = styled.h2`
     height:40px;
    padding: 30px 0;
    text-align:center;
    margin-bottom: 2rem;
      color:white;
      font-size: clamp(2rem, 2.5vw, 3rem);
      letter-spacing:4px;
      text-transform:uppercase;
`

const PizzaWrapper = styled.div`
    display:flex;
  flex-wrap:wrap;
  padding:10px 0 ;
  justify-content:center;
`

const Pizzacard=styled.div`
    margin: 0 3rem;
  width:400px;
  min-width: 400px;
  line-height:2;
`

const PizzaImg=styled.img`
     height: 400px;
  min-width: 400px;
  box-shadow: 8px 8px #fdc500;
`

const PizzaInfo=styled.div`
      display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   padding:1.5rem 0; 
`
const PizzaTitle=styled.h2`
    font-weight: 400;
  font-size: 1.5rem;
  color:white;
  word-spacing: 1px;
  letter-spacing:3px;
`
const Pizzadescripttion=styled.p`
     margin-bottom: 1rem;
  color:white;
  margin:20px 0;
  font-size:20px;
  text-align:center;
  word-spacing: 1px;
  letter-spacing:3px;
`

const PizzaPrice=styled.p`
     margin-bottom: 1rem;
  font-size: 2rem;
  color:white;
  word-spacing: 1px;
  letter-spacing:3px;
`
const PizzaButton=styled.button`
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

export default Pizza