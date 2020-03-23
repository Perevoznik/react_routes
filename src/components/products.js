import React from "react";
import Phone from './categories/phone';
import Tablet from './categories/tablet';
import Product from './product';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class Products extends React.Component {

    render() {

        const productsArr = [
            { id: 1, name: "iPhone 7" },
            { id: 2, name: "Google Pixel" },
            { id: 3, name: "Samsung" },
            { id: 4, name: "HTC" },
        ];

        return (
            <div>
                <h2>Товары</h2>
                <BrowserRouter>

                    <ul>
                        {
                            productsArr.map((product) =>
                                <li><Link to={`/product/${product.id}`}> {product.name} </Link></li>)
                        }
                    </ul>
                    <Switch>
                        {/* <Route path="/products/phones" component={Phone} /> */}
                        <Route path="/product/:id?" component={Product} />
                    </Switch>

                </BrowserRouter>
            </div>
        );
    }
}

export default Products;