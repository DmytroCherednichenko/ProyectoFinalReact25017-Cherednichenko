import "./item.css"
import { Button } from "react-bootstrap"

const Item = (props) => {
    return (
        <div className="item">
            <img src={props.image} alt={`An image of a ${props.name}`} />
            <p>{props.name}</p>
            <div className="item-price">
                {props.price}
            </div>
            <Button onClick={()=>props.addToCart(props.id)}>Add to cart</Button>
            
        </div>
    )
}

export default Item;