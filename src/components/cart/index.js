import { useSelector } from "react-redux";
import ProductCart from "../productCart";
import { useEffect, useState } from "react";
var TongTien = 0;
function Cart() {
    const result = useSelector(state => state.product)
    const calCoins = () => {
        let totalCoins = result.reduce((total, curenCoins) => {
            const PriceNew = (curenCoins.data.price - (curenCoins.data.price) * (curenCoins.data.discountPercentage) / 100).toFixed(0);
            const coins = PriceNew * (curenCoins.quantity);
            return total + coins;
        }, 0)
        return totalCoins;
    }
    const totalCoins = calCoins();
    return (
        <>
            {result.length > 0 ? (
                <>
                    <div style={{ marginBottom: "5px" }}>
                        Tổng Tiền :
                        {totalCoins > 0 ? (<>{totalCoins}$</>) : (<>0 $</>)}
                    </div>
                    {result.map((item,index) => (
                        <ProductCart index={index} item={item} key={item.id} />
                    ))}
                </>
            ) : (<>Chưa có sản phẩm nào</>)}
        </>
    )
}
export default Cart;
