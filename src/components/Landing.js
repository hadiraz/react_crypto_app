import React, { useEffect, useState } from 'react';
import { getCoins } from "../services/api";
import CoinItem from './CoinItem';
import Loader from './Loader';

function Landing() {
  const [coinsData , setCoinsData] = useState([]);
  const [loading , setLoading] = useState(false);
  const [search , setSearch] = useState("");

  useEffect(()=>{
    const fetchCoinsData = async() => {
      setLoading(true)
        const data = await getCoins();
        if(data){
          setCoinsData(data)
        }
        setLoading(false)
        console.log(coinsData)
    }
    fetchCoinsData();
  },[])

  const searchHandler = (e) => {
    setSearch(e.target.value)
  }  

  const searchCoins = coinsData.filter(coin => coin.name.toUpperCase().includes(search.toUpperCase()))

    return (
    <section className="landing-container">
      <div className="landing-search-box-container">
        <input placeholder="search ..." value={search} onChange={searchHandler} />
      </div>
      <ul className="coins-container">
        {
          loading && <Loader/>
        }
        {
         searchCoins.map((value)=>(
            <CoinItem value={{
              name : value.name ,
              image : value.image ,
              price : value.current_price ,
              change : value.market_cap_change_percentage_24h ,
              symbol : value.symbol ,
              marketCap : value.market_cap
            }} />
         )) 
        }
      </ul>
    </section>
    )
}

export default Landing