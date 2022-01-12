import React from 'react';

import "./Product.css"

export const Product = (props) => {

    return (<>
    
        <div>
             <div className="product">
            <div className="product__info">
                <p>{props.title}</p>
                <p className="product__price">
                    <small>Rs</small>
                    <strong>{props.price}</strong>
                </p>
               
            </div>

            <img src={props.image} alt="missing" />

            <button onClick={()=>{props.addtobasket(props)}} >Add to Basket</button>
        </div>
        
     
            
        </div></>
    )
}
