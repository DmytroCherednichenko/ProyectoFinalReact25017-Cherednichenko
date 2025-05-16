import "./popular.css"
import { getLimitedProducts } from "../../assets/ListOfProducts"
import { useState, useEffect } from 'react'
import Item from "../item/Item"
import { Container } from 'react-bootstrap'

const Popular = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const data = await getLimitedProducts(20);
            setProducts(data);
        }
        loadProducts();
    }, []);

    return (
        <Container className="popular">
            <h1>Productos Populares</h1>
            <Container className='popular-flex-wrapper'>
                {
                    products.map((item, index) => <Item className="popular-item" key={index} id={item.id} name={item.title} image={item.images[0]} price={item.price} addToCart={props.addToCart}></Item>)
                }
            </Container>
        </Container>
    )
}

export default Popular;