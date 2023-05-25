import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/productlist";
function Home(){
    const dispatch = useDispatch();
    const result = useSelector(state => state.product)
    return (
        <>
        <ProductList/>
        </>
    )
}
export default Home;