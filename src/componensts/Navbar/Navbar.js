import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom"
import { FaPizzaSlice } from 'react-icons/fa';
import {AiOutlineShoppingCart} from "react-icons/ai";
import { useSelector } from 'react-redux'

const Navbar = (props) => {

  const items = useSelector((state)=>state.cart)
  return (
    <Nav>
      <NavLink to="/" className='pizza-link'>Pizza</NavLink>
      
      <NavIcon onClick={props.toggle}>
        <p >Menu</p>
        <Bars />
      </NavIcon>
      <CartIcon>
      <NavLink to="/cart"><Cart/></NavLink>
      <Count>{items.length}</Count>
      </CartIcon>
    </Nav>
  )
}

const Nav = styled.nav`
    background-color:transparent;
    position:fixed;
    height:80px;
    width:100%;
    display:flex;
    justify-content:center;
    font-weight:900;
    font-size: clamp(1rem, 3vw, 1.5rem);
    .pizza-link{
    color:#fff;
    font-size:2rem;
    display:flex;
    align-items:center;
    text-decoration:none;
    cursor:pointer;
    

   @media screen and (max-width: 400px)
    {
    position:absolute;
    top:10px;
    left:25px
    }

    }
`

const NavIcon =styled.div`
  display:block;
  position:absolute;
  top:0;
  right:50px ;
  cursor:pointer;
  color:#fff;
  display:flex;
  p{
    transform:translate(-175%,100%);
    font-weight:bold;
    
  }
`


const Bars =styled(FaPizzaSlice)`
  font-size:2rem;
  transform:translate(-50%,-15%);
  position:absolute;
  top:40px;
  right:0;
`

const CartIcon =styled.div`
    display:block;
  position:absolute;
  top:40px;
  right:0;
  cursor:pointer;
  color:#fff;
`

const Cart=styled(AiOutlineShoppingCart)`
  font-size:2rem;
  transform:translate(-50%,-15%);
  color:#fff;
`
const Count=styled.span`
  background:white;
  border-radius:50%;
  width:15px;
  color:black;
  font-family:'Poppins';
  position:absolute;
  top:-15px;
  right:10px;
`

export default Navbar