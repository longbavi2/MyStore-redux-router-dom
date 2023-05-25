import { Link, Outlet } from "react-router-dom"
import { useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import "./style.scss"
function Layout() {
    const result = useSelector(state => state.product)
    const totalQuatity = result.reduce((totals, curent) => {
        const a = curent.quantity;
        return totals + a;
    }, 0)
    return (
        <>
            <header className="header">
                <div className="header__logo">
                    <Link to="/">
                        <img src="https://vn-live-01.slatic.net/p/mdc/03b895db9c7b85ae98973b0941d66696.jpg" alt="" />
                    </Link>
                </div>
                <div className="header__cart">
                    <Link to="/cart"><FaCartPlus /><span>{totalQuatity}</span></Link>
                </div>
            </header>
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer">
                My Shop
            </footer>
        </>
    )
}
export default Layout;