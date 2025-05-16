import { Container } from "react-bootstrap"
import "./cart.css"
import { useState, useEffect } from "react"
import { getSingleProduct } from "../../assets/ListOfProducts"
import CartItem from "../../components/cart-item/CartItem"

const Cart = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const results = await Promise.all(
                props.cartItems.map(id => getSingleProduct(id))
            );
            setProducts(results);
        }

        if (props.cartItems.length > 0) {
            loadProducts();
        } else {
            setProducts([]);
        }
    }, [props.cartItems]);

    return (
        <Container className="cart-page">
            <h1>Su Carrito</h1>
            <Container className="cart-flex-wrap">
                {
                    products.map((item, index) => <CartItem removeFromCart={props.removeFromCart} className="cart-item" key={index} id={item.id} name={item.title} image={item.images[0]} price={item.price}></CartItem>)
                }
            </Container>
        </Container>
    )
}

export default Cart