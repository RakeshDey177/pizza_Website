import React from 'react';
import Carousel from 'react-material-ui-carousel';
import data from "./data.json";
import Item from './Item';

function Example() {
    return (
    
            <Carousel>
            {
                data.map( (item) => <Item key={item.id} image={item.image} title={item.title} description={item.description}/> )
            }
            </Carousel>
    
        
    )
}




export default Example