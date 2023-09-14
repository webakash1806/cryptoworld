const CoinListBox = (props) => {
    const { id, name, image, price, low24, high24, priceChangePer, marketCap } = props
    return (
        <div key={id}>
            <img src={image} alt="" />
            <p >{name}</p>
            <div>
                <p>${price}</p>
                <p>${low24}</p>
                <p>${high24}</p>
                <p>{priceChangePer}%</p>
                <p>${marketCap}</p>
            </div>
        </div>
    )
}

export default CoinListBox
