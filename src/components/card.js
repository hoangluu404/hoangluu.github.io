import React from 'react';
import { render } from '@testing-library/react';

const Card = (props) => (
    
        <div style={{
            justifyContent: "flex-start" ,
            padding: "0.005%",
            margin: "1%",
            padding: "1%",
            height: "auto",
            width: "fit",
            boxShadow: "0px 5px 10px 2px rgba(0,0,0,0.25)"
        }}>
            {props.children}
            </div>
    
)

export default Card;