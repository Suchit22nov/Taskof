import React, { useState } from 'react'
import Checkout from './Checkout'
import Front from './Front'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";



function App() {
    const [basket, setBasket] = useState([])

    return (
        <>
            <Router>

                <Switch>

                    <Route path="/checkout">
                        
                        <Checkout basket={basket} />

                    </Route>

                    <Route path="/">
                    <Link to="/checkout">Basket</Link>
                        <Front basket={basket} setBasket={setBasket} />
                    </Route>

                </Switch>

            </Router>
        </>
    )
}

export default App

