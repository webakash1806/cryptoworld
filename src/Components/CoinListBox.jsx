const CoinListBox = (props) => {
    const { id, name, image, price, low24, high24, priceChangePer, marketCap, rank } = props
    return (
        <div key={id}>
            <p>{rank}.</p>
            <p >{name}</p>
            <img src={image} alt="" />
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
