import Popular from "../components/popular/popular";

const ShopMain = (props) => {
    return (
        <div>
            <Popular addToCart={props.addToCart}/>
        </div>
    )
}

export default ShopMain;