import { Link } from "react-router-dom"

const Header = () => {

    return (
        <div>
            <Link to="/cryptoworld/exchange">Exchange</Link>
            <Link to="/cryptoworld/coin">Coins</Link>
        </div>
    )
}

export default Header
