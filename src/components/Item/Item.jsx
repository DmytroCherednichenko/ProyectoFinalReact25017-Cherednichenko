import "./item.css"

const Item = (props) => {
    return (
        <div className="item">
            <img src={props.image} alt={`An image of a ${props.name}`} />
            <p>{props.name}</p>
            <div className="item-price">
                {props.price}
            </div>
            
        </div>
    )
}

export default Item;