import React from 'react'
import { FiFacebook,FiInstagram,FiTwitter} from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
   
    <FooterContainer>
        <FooterWrap>
            <Footerheading to="/">Pizza</Footerheading>
            <FooterList>
                <FooterIcon><FiFacebook className='footer-icon'/></FooterIcon>
                <FooterIcon><FiInstagram className='footer-icon'/></FooterIcon>
                <FooterIcon><AiOutlineYoutube className='footer-icon'/></FooterIcon>
                <FooterIcon><FiTwitter className='footer-icon'/></FooterIcon>
            </FooterList>
        </FooterWrap>
    </FooterContainer>
  
  )
}



const FooterContainer =styled.div`
    padding:30px 35px;
    min-width:100vh;
    background-color: #0d0909;

    @media screen and (max-width:400px){
        width:100%;
    }
`
const FooterWrap=styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
`

const Footerheading =styled(NavLink)`
text-decoration: none;
  font-size: 1.5rem;
  color: #fff;
`
const FooterList =styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

`

const FooterIcon =styled.div`
     color: #000;
     margin:1rem;
     padding:1.2rem;
     background-color:white;
     border-radius:50%;
     font-size:25px;

     .footer-icon{
      font-size:30px;
      color:black;
      transition:0.3s ease-in;
     }

     &:hover{
        transform:rotate(360deg);
        transition:0.7s ease-in;
     }
`

export default Footer