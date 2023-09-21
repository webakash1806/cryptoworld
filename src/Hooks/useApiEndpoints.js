
// Coin List Endpoint
export const CoinDataAPI = (coinPageCount) => {
    return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=${coinPageCount}`
}

// Exchange List endpoint
export const ExchangeDataAPI = (exchangePageCount) => {
    return `https://api.coingecko.com/api/v3/exchanges?per_page=100&page=${exchangePageCount}`
}

//Trending Section Endpoint
export const TrendingDataAPI = () => {
    return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
}

export const singleCoinData = (id) => {
    return `https://api.coingecko.com/api/v3/coins/${id}?sparkline=false`
}

export const coinSparkLine = (id, days = 1) => {
    return `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=INR&days=${days}`
}

export const singleExchange = (id) => {
    return `https://api.coingecko.com/api/v3/exchanges/${id}?sparkline=false`
}

export const exchangeSparkline = (id, day = 1) => {
    return `https://api.coingecko.com/api/v3/exchanges/${id}/volume_chart?days=${day}`
}