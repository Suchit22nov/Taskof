import React, { useState } from 'react'
import { Product } from './Product'

function Front(props) {
    const {basket,setBasket}=props
    const addhandler=(e)=>{
        setBasket((oldvalue)=>{
            return [...oldvalue,e];
           
        })  
        console.log(basket);  
    }
    
    
    return (
        <div className="home">
        <div className="home__container">

          
            <div className="home__row">
                <Product
                    key="12321341"
                    id="12321341"
                    title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
                    price={11.96}
                    addtobasket={addhandler}
                    image="https://images.unsplash.com/photo-1511598800709-141ed22fcefc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFkaWVzJTIwYmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
                <Product
                    key="49538094"
                    id="49538094"
                    title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
                    price={239.0}
                    addtobasket={addhandler}
                    image="https://images.unsplash.com/photo-1623114112815-74a4b9fe505d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWljcm8lMjB3YXZlJTIwb3ZlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
            </div>

            <div className="home__row">
                <Product
                    key="4903850"
                    id="4903850"
                    title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
                    price={199.99}
                    addtobasket={addhandler}
                    image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
                <Product
                key="23445930"
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    addtobasket={addhandler}
                    image="https://images.unsplash.com/photo-1568910748155-01ca989dbdd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWNobyUyMGRvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
                <Product
                    key="3254354345"
                    id="3254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    addtobasket={addhandler}
                    image="https://images.unsplash.com/photo-1590795769046-b197fb723a22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBpcGFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
            </div>

            <div className="home__row">
                <Product
                    key="90829332"
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    addtobasket={addhandler}
                    image="https://images.unsplash.com/photo-1585792180666-f7347c490ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9uaXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
            </div>
        </div>   
       
    </div> 
        
    )
}

export default Front
