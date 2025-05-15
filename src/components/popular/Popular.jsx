import React from 'react'
import "./popular.css"
import { getPopularProducts } from "../../assets/ListOfProducts"
import { useState, useEffect } from 'react'
import Item from "../item/Item"

const Popular = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const data = await getPopularProducts();
            setProducts(data.products);
        }
        loadProducts();
    }, []);

    console.log(products);

    return (
        <div className="popular">
            <h1>Popular in Women</h1>
            <hr />
            <div className="popular-item">
                {
                    products.map((item, index) => <Item key={index} id={item.id} name={item.title} image={item.image} price={item.price}></Item>)
                }
            </div>
        </div>
    )
}

export default Popular;