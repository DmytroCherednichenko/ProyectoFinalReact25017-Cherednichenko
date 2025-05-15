import { getCategoryProducts } from "../assets/ListOfProducts"
import { useState, useEffect } from 'react'
import Item from "../components/item/Item"
import { Container } from 'react-bootstrap'
import "./shopcategory.css"

const ShopCategory = (props) => {
    console.log(props.category);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const data = await getCategoryProducts(props.category);
            setProducts(data);
        }
        loadProducts();
    }, []);

    console.log(products);

    return (
        <Container className="shop-category">
            <h1>Products for you!</h1>
            <Container className="category-products-wrapper">
                {
                    products.map((item, index) => <Item className="popular-item" key={index} id={item.id} name={item.title} image={item.images[0]} price={item.price}></Item>)
                }
            </Container>

        </Container>
    )
}

export default ShopCategory;