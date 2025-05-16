import { getCategoryProducts } from "../../assets/ListOfProducts"
import { useState, useEffect } from 'react'
import Item from "../../components/item/Item"
import { Container } from 'react-bootstrap'
import "./shopcategory.css"

const ShopCategory = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function loadProducts() {
            const data = await getCategoryProducts(props.category);
            setProducts(data);
            setLoading(false);
        }
        loadProducts();
    }, [props.category]);

    if (loading) return <div className="shop-category-loading"><span class="loader"></span></div>;


    const renderHeading = (category) => {
        switch (category) {
            case "3":
                return <h1>Compra nuestros muebles!</h1>;
            case "4":
                return <h1>Compra nuestros zapatos!</h1>;
            case "5":
                return <h1>Estillo de vida!</h1>;
            default:
                return <h1>Products for you!</h1>;
        }
    };

    return (
        <Container className="shop-category">
            {
                renderHeading(props.category)
            }
            <Container className="category-products-wrapper">
                {
                    products.map((item, index) => <Item addToCart={props.addToCart} className="popular-item" key={index} id={item.id} name={item.title} image={item.images[0]} price={item.price}></Item>)
                }
            </Container>

        </Container>
    )
}

export default ShopCategory;