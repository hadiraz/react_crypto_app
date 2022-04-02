import React from 'react'
import spinner from "../assets/gif/Infinity-1.1s-200px.gif";

function Loader() {
  return (
    <img className="loader" alt="loading" src={spinner} />
  )
}

export default Loader