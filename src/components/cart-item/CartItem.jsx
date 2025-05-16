import "./cartitem.css"
import { Button } from "react-bootstrap"

const CartItem = (props) => {

    return (
        <div className="cart-item">
            <img src={props.image} alt={`An image of a ${props.name}`} />
            <p>{props.name}</p>
            <div className="cart-item-price">
                {props.price}
            </div>
            <Button variant="outline-danger" onClick={() => props.removeFromCart(props.id)}>Remove</Button>

        </div>
    )
}

export default CartItem