import React from 'react'
import "./popular.css"
import { getPopularProducts } from "../../assets/ListOfProducts"
import { useState, useEffect } from 'react'
import Item from "../item/Item"
import { Container, Row, Col } from 'react-bootstrap'

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
        <Container className="popular">
            <h1>Popular in Women</h1>
            <Row>
                {
                    products.map((item, index) => <Col className="popular-item"><Item key={index} id={item.id} name={item.title} image={item.image} price={item.price}></Item></Col>)
                }
            </Row>
        </Container>
    )
}

export default Popular;