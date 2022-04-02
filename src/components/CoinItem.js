import React from 'react'

function CoinItem({value}) {
    const {name , image , symbol , price , marketCap , change} = value
  return (
    <li key={name} className="coin-item-container">
        <div className="coin-item-name-box">
            <img className="coin-icon" src={image} alt={name} />
            <p className="coin-name">
            {name}
            </p>
        </div>
        <p className="coin-symbol">
        {symbol.toUpperCase()}
        </p>
        <p className="coin-price">
        ${price.toLocaleString()}
        </p>
        <p className={`coin-changes 
        ${change > 0 ? "green" : "red"}
        ${Number(change) === 0 && "black"}
        `}>
        {change.toFixed(2)}%
        </p>
        <p className="coin-market-cap">
        ${marketCap.toLocaleString()}
        </p>
    </li>
  )
}

export default CoinItem