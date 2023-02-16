import React from 'react';
import { Paper, Button } from '@mui/material'
import styled from 'styled-components';
function Item(props)
{
    return (
        <Paper style={{marginBottom:"50px"}}>
      
            <img src={props.image} alt="pizza" style={{width:"100%" ,minHeight:"100vh"}}/>
            
        </Paper>
    )
}




const Heading =styled.h2`
    display:flex;
    justify-content:center;
`

const Para =styled.p`
    display:flex;
    justify-content:center;
`

export default Item;