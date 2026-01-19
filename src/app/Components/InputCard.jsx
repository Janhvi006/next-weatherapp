"use client"
import React,{useState} from 'react'
import ResultCard from './ResultCard'

const InputCard = ({onSearch}) => {
  const [city,setCity]= useState("");

  
  const handleSearch =(e) =>{
    e.preventDefault();
     if (city.trim()) {
      onSearch(city.trim()); 
  }
};
  return (
    <div>
      <div className='bg-white p-[32px] rounded-2xl width-[300px] flex'>
        <form onSubmit={handleSearch} >
        <input   className="border-1 border-amber-500  rounded-2xl pl-[12px]"  
        placeholder='Enter your city name' 
        type='text'
        value={city}
        onChange={(e) => setCity(e.target.value)}/>
        </form>
      <button className='bg-amber-500 ml-[12px] rounded pr-[12px] pl-[12px] text-white' onClick={handleSearch}>search</button></div>
    </div>
  )
}


export default InputCard
