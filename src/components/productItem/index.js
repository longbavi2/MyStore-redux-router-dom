import { useDispatch, useSelector } from "react-redux";
import { ProductCart } from "../../actions";
function ProductItem(props) {
    const { item } = props;
    const DisCountNew = item.discountPercentage.toFixed(0);
    const PriceNew = (item.price - (item.price) * (item.discountPercentage) / 100).toFixed(0);
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(ProductCart(item.id, item))
    }
    return (
        <>

            <div key={item.id} className="product__item">
                <div className="product__image">
                    <span className="product__discount">
                        {DisCountNew}%
                    </span>
                    <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="product__content">
                    <h3 className="product__title">
                        {item.title}
                    </h3>
                    <div className="product__footer">
                        <div className="product__price">
                        <span className="product__price--old">
                            {item.price}$
                        </span>
                        <span className="product__price--new">
                                {PriceNew}$
                        </span>
                        </div>
                        <span className="product__stock">
                            Còn : {item.stock} sp
                        </span>
                    </div>
                </div>
                <button onClick={handleAdd} className="product__button">
                    Thêm vào giỏ hàng
                </button>
            </div>
        </>
    )
}
export default ProductItem;