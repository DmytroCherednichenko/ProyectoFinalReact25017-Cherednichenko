import React from 'react'
import "./popular.css"
import { getLimitedProducts } from "../../assets/ListOfProducts"
import { useState, useEffect } from 'react'
import Item from "../item/Item"
import { Container } from 'react-bootstrap'

const Popular = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const data = await getLimitedProducts(20);
            setProducts(data);
        }
        loadProducts();
    }, []);

    console.log(products);

    return (
        <Container className="popular">
            <h1>Popular Products</h1>
            <Container className='popular-flex-wrapper'>
                {
                    products.map((item, index) => <Item className="popular-item" key={index} id={item.id} name={item.title} image={item.images[0]} price={item.price}></Item>)
                }
            </Container>
        </Container>
    )
}

export default Popular;