import { getPopularProducts } from "../assets/ListOfProducts";

const listOfProducts = getPopularProducts();

const ShopMain = () => {
    console.log(listOfProducts);
    return (
        <div>
            {
            }
        </div>
    )
}

export default ShopMain;