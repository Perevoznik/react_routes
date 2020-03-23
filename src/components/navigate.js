import React from 'react';
import Home from './home';
import About from './about';
import Products from './products';
import { BrowserRouter, Route, Link } from "react-router-dom";

class Navigate extends React.Component {

    render() {
        return (
            <BrowserRouter>

                <div>
                    <ul>
                        <li> <Link to="/"> Home </Link> </li>
                        <li> <Link to="/about"> About </Link> </li>
                        <li> <Link to="/products"> Products </Link> </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/products" component={Products} />

                </div>

            </BrowserRouter>
        );
    }
}

export default Navigate;