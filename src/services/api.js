import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3/coins/markets" ;
axios.defaults.baseURL = API_URL ;

const getCoins = async (type="usd" , perPage=100 , page=1) => {
    try{
        const data = await axios.get(`?vs_currency=${type}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`) ;
        return data.data ;
    } catch(e){
        return false
    }
}

export { getCoins } 