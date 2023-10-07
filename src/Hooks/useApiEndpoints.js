
// Coin List Endpoint
export const CoinDataAPI = (coinPageCount) => {
    return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=${coinPageCount}`
}

// Exchange List endpoint
export const ExchangeDataAPI = (exchangePageCount) => {
    return `https://api.coingecko.com/api/v3/exchanges?vs_currency=INR&per_page=100&page=${exchangePageCount}`
}

//Trending Section Endpoint
export const TrendingDataAPI = () => {
    return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
}

// Single Coin data Endpoint
export const singleCoinData = (id) => {
    return `https://api.coingecko.com/api/v3/coins/${id}?sparkline=false`
}

// Coin sparkline API Endpoint
export const coinSparkLine = (id, days = 1) => {
    return `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=INR&days=${days}`
}

// Single Exchange data Endpoint
export const singleExchange = (id) => {
    return `https://api.coingecko.com/api/v3/exchanges/${id}?sparkline=false`
}

// Single Exchange Sparkline
export const exchangeSparkline = (id, day = 1) => {
    return `https://api.coingecko.com/api/v3/exchanges/${id}/volume_chart?vs_currency=INR&days=${day}`
}

// Search Endpoint
export const searchEndpoint = (query) => {
    return `https://api.coingecko.com/api/v3/search?query=${query}`
}