import "./item.css"

const Item = (props) => {
    return (
        <div className="item">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item-price">
                {price.price}
            </div>
        </div>
    )
}

export default Item;