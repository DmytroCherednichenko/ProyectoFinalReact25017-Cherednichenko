import "./popular.css"
import { getLimitedProducts } from "../../assets/ListOfProducts"
import { useState, useEffect } from 'react'
import Item from "../item/Item"
import { Container } from 'react-bootstrap'

const Popular = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProducts() {
            const data = await getLimitedProducts(50);
            setProducts(data);
            setLoading(false);
        }
        loadProducts();
    }, []);

    if (loading) return <div className="popular-loading"><span className="loader"></span></div>;


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