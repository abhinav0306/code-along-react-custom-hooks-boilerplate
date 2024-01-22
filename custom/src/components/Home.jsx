import React from 'react'
import UseStorage from './useStorage'
import "./home.css"
const Home = () => {
    const [inputValue, setInputValue] = UseStorage("inputValue");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  return (
<div className="box">
<input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      </div>
    )
}

export default Home