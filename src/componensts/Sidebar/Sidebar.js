import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

function Sidebar(props) {
  return (
    <SidebarContainer isOpen={props.isOpen} >
        <Icon onClick={props.toggle}>
            <AiOutlineClose className='closeIcon' />
        </Icon>
        <SidebarMenu>
            <Link to="">Desert</Link>
            <Link to="/pizzas">Pizzas</Link>
            <Link to="">Full Menu</Link>
        </SidebarMenu>
        <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  )
}

const SidebarContainer =styled.div`
    position :fixed;
    z-index:69;
    width:350px;
    height:100vh;
    min-height:100%;
    background:#ffc500;
    display:flex;
    flex-direction:column;
    top:0;
    right:${({ isOpen}) => ((isOpen === true) ? '0' : '-1000px')};
    bottom:0;
    transition: 0.5s linear;

    @media screen and (max-width:400px){
        width:45%;
    }
`
const Icon =styled.div`
    cursor:pointer;
    position:absolute;
    top:1.3rem;
    right:1.6rem;
    background:transparent;
    font-size:2rem;

    .closeIcon{
        color:#000;
    }
`

 const SidebarMenu=styled.div`
    display:flex;
    flex-direction:column;
    margin:40% 0 6rem 0;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    color:red;


`
const Link=styled(NavLink)`
    text-decoration:none;
    list-style-type:none;
    font-size:1.5rem;
    text-align:center;
    width:100%;
    padding:1rem 0;
    transition:0.3s ease-in;
    color:black;
    font-weight:bold;
    border-bottom:1px solid #000;
    font-family:monospace;

    &:hover{
        padding-left:10px;
        transition:0.3s ease-in;
    }
`
 const SideBtnWrap=styled.div`
    display:flex;
    justify-content:center;
 `
const SidebarRoute=styled.div`
     font-size: 1.2rem;
  padding: 1rem 3rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`

export default Sidebar