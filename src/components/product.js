import React from "react";

class Product extends React.Component {

    render() {

        const productsArr = [
            { id: 1, name: "iPhone 7" },
            { id: 2, name: "Google Pixel" },
            { id: 3, name: "Samsung" },
            { id: 4, name: "HTC" },
        ];

        const productId = this.props.match.params.id;

        const findProduct = productsArr.find(product => product.id == productId);

        return (
            <div>
                <h1>Обзор продукта {findProduct.name}</h1>

                <p>У этого продукта id = {findProduct.id}</p>
            </div>
        );
    }
}

export default Product;