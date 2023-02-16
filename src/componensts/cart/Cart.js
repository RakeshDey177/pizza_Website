import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../features/cartSlice';

const Cart = () => {

  const pizzaProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(pizzaProducts);

  const handleRemove = (id) => {
    dispatch(remove(id));
  }

  return (
    <CartContainer>
      <CartHeading>Your cart</CartHeading>

      <CartWrapper>
        {
          pizzaProducts.map((pizzaProduct,index) => {
            return (
              <CartCard key={index}>
                <CartImg src={pizzaProduct.img} alt="err" />
                <CartInfo>
                  <CartTitle>{pizzaProduct.name}</CartTitle>
                  <CartDescription>{pizzaProduct.desc}</CartDescription>
                  <CartPrice>{pizzaProduct.price}</CartPrice>
                  <CartButton id="btn" onClick={() => handleRemove(pizzaProduct.id)}>Remove</CartButton>
                </CartInfo>
              </CartCard>
            )
          }
          )
        }
      </CartWrapper>
    </CartContainer>
  )
}


const CartContainer = styled.div`
    height:100%;
    width:100vw;
    min-width:100vh;
    min-height:100vh;
    background:#000;
    @media screen and (max-width:400px){
        width:100%;
    }
`

const CartHeading = styled.h2`
     height:40px;
    padding: 30px 0;
    text-align:center;
    padding-top:5rem;
    margin-bottom: 2rem;
      color:white;
      font-size: clamp(2rem, 2.5vw, 3rem);
      letter-spacing:4px;
      text-transform:uppercase;
`

const CartWrapper = styled.div`
    display:flex;
  flex-wrap:wrap;
  padding:10px 0 ;
  justify-content:center;
`

const CartCard = styled.div`
    margin: 0 3rem;
  width:400px;
  min-width: 400px;
  line-height:2;
`

const CartImg = styled.img`
     height: 400px;
  min-width: 400px;
  box-shadow: 8px 8px #fdc500;
`

const CartInfo=styled.div`
      display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   padding:1.5rem 0; 
`

const CartTitle=styled.h2`
    font-weight: 400;
  font-size: 1.5rem;
  color:white;
  word-spacing: 1px;
  letter-spacing:3px;
`
const CartDescription=styled.p`
     margin-bottom: 1rem;
  color:white;
  margin:20px 0;
  font-size:20px;
  text-align:center;
  word-spacing: 1px;
  letter-spacing:3px;
`

const CartPrice=styled.p`
     margin-bottom: 1rem;
  font-size: 2rem;
  color:white;
  word-spacing: 1px;
  letter-spacing:3px;
`
const CartButton=styled.button`
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

export default Cart