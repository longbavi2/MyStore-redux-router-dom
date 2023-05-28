import { useEffect, useState } from "react";
import ProductItem from "../productItem";
import { API_PRODUCT } from "../../helpers/constant";
import { params } from "../../helpers/constant";
import { getApi } from "../../helpers/getApi";
import "./style.scss";
function ProductList() {
    const drawProduct = () => {
        let api = `${API_PRODUCT}?$&q=${params.q}&_sort=${params.sort}&_order=${params.order}`;
        console.log(api)
        getApi(api).then(data => setData(data))
    }
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetApi = async () => {
            const result = await getApi(API_PRODUCT);
            setData(result);
        }
        fetApi();
    }, [])

    const handleClick = () => {
        const input = document.querySelector("input");
        params.q = input.value;
        drawProduct();
    }
    const handleChange = (e) => {
        if(e.target.value === "mac-dinh"){
            params.order= "";
            params.sort = "";
            drawProduct();
        }
        else if(e.target.value === "gia-thap-den-cao"){
            params.order ="asc";
            params.sort = "price";
            drawProduct();
        }
        else if(e.target.value ==="gia-cao-den-thap"){
            params.order = "desc";
            params.sort = "price";
            drawProduct();
        }
        else if(e.target.value === "giam-gia-nhieu"){
            params.order = "desc";
            params.sort = "discountPercentage";
            drawProduct();
        }
    }
    return (
        <>
            <div className="search" id="search">
                <input type="text" placeholder="Nhập từ khóa tìm kiếm..." />
                <button onClick={handleClick} id="">Tìm kiếm</button>
            </div>

            <select id="filter" onChange={handleChange}>
                <option value="mac-dinh">Mặc định</option>
                <option value="gia-thap-den-cao">Giá thấp đến cao</option>
                <option value="gia-cao-den-thap">Giá cao đến thấp</option>
                <option value="giam-gia-nhieu">Giảm giá nhiều</option>
            </select>

            <h5 className="title">
                Danh Sách sản phẩm
            </h5>
            {data.length > 0 && (<>
                <div className="product__list">
                    {data.map(item => (
                        <ProductItem key={item.id} item={item} />
                    ))}
                </div>
            </>)}
        </>
    )
}
export default ProductList;