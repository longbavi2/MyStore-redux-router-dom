import { useDispatch } from "react-redux";
import { ProductAdd, ProductDelete, ProductSub } from "../../actions";
import "./styles.scss"
function ProductCart(props) {
    const { item, index } = props;
    const DisCountNew = item.data.discountPercentage.toFixed(0);
    const PriceNew = (item.data.price - (item.data.price) * (item.data.discountPercentage) / 100).toFixed(0);
    const dispatch = useDispatch();
    return (
        <>
            <h5 style={{ marginBottom: "10px", marginTop: "10px" }}>
                Sản phẩm {index + 1}
            </h5>
            <div key={item.data.id} className="products__item">
                <div className="products__box">
                    <div className="products__image">
                        <img src={item.data.thumbnail} alt="" />
                    </div>
                    <div className="products__meta">
                        <div className="products__title">
                            {item.data.title}
                        </div>
                        <div className="products__discount">
                            {DisCountNew} %
                        </div>
                        <div className="products__price--new">
                            {PriceNew}$
                        </div>
                        <div className="products__price">
                            {item.data.price}$
                        </div>
                    </div>
                </div>
                <div className="products__button">
                    <button onClick={() => dispatch(ProductSub(item.id))} className="products__sub">
                        -
                    </button>
                    <span className="products__show">
                        <div>
                            {item.quantity}
                        </div>
                    </span>
                    <button onClick={() => dispatch(ProductAdd(item.id))} className="products__add">
                        +
                    </button>
                    <span onClick={() => dispatch(ProductDelete(item.id))} className="products__delete">
                        <button>Xóa</button>
                    </span>
                </div>
            </div>
        </>
    )
}
export default ProductCart;