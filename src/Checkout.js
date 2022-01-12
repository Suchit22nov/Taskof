import React, { useEffect, useState } from 'react'
import "./checkout.css";

function Checkout(props) {
    const { basket } = props
    const [totalPrice, setTotalPrice] = useState(0)
    var totPrice=0;
    
    useEffect(() => {
     
    basket.map((e)=>{
        totPrice+=e.price
        setTotalPrice(totPrice)
      })
    
      
  }, )
    return (<>{
    basket.map((e)=>{
        return(<>
         <div className="product">
            <div className="product__info">
                <p>{e.title}</p>
                <p className="product__price">
                    <small>Rs</small>
                    <strong>{e.price}</strong>
                </p>

            </div>

            <img src={e.image} alt="missing" />
        </div>
        <div>
       
        
        </div>
        
        </>
        )
    })}
 <h1>Total Checkout Price{totalPrice}</h1>
       
        </>

    )
}

export default Checkout;
