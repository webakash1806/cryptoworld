import { useState } from "react";
import CoinContext from "./CoinContext";

const CoinContextData = ({ children }) => {
    const [coin, setCoin] = useState(0)
    return (
        <CoinContext.Provider value={{ coin, setCoin }}>
            {children}
        </CoinContext.Provider>
    )
}

export default CoinContextData