import { useDispatch, useSelector } from "react-redux";
import { ProductCart } from "../../actions";
function ProductItem(props){
    const { item } = props;
    const DisCountNew = item.discountPercentage.toFixed(0);
    const PriceNew = (item.price - (item.price)*(item.discountPercentage)/100).toFixed(0);
    const dispatch = useDispatch();
    
    const handleAdd=()=>{
        dispatch(ProductCart(item.id,item))
    }
    return (
        <>
        <div key={item.id} className="product__item">
                    <div className="product__box">
                        <div className="product__image">
                            <img src={item.thumbnail} alt="" />
                        </div>
                        <div className="product__title">
                            {item.title}
                        </div>
                        <div className="product__discount">
                            {DisCountNew} %
                        </div>
                        <div className="product__price--new">
                            {PriceNew}$
                        </div>
                        <div className="product__price">
                            {item.price}$
                        </div>
                        <button onClick={handleAdd} className="product__button">
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>
        </>
    )
}
export default ProductItem;