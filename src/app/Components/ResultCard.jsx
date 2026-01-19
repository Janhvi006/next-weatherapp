"use client"
import Image from 'next/image'
import React from 'react'


const ResultCard = ({weatherData}) => {
  if (!weatherData){
    return null;
  }
  return (
    <div className='bg-blue-950 h-[300px] justify-center items-center rounded-2xl flex-col'>
      <div className=' text-white flex flex-row w-[350px] pt-[40px] pl-[80px] '>
      <p  id="cityName">{weatherData.location.name}</p>
      <p id="country" style={{marginLeft :"32px",backgroundColor:"orange",paddingLeft:"10px",paddingRight:"10px"}}>{weatherData.location.country}</p>
      </div>
      <h1 id="temp" style={{fontSize:"64px", color:"white",paddingLeft:"25%"}}>{weatherData.current.temp_c}°C</h1>
      <div className=" justify-center ">
      <img 
  src={`https:${weatherData.current.condition.icon}`} 
  alt={weatherData.current.condition.text} 
  width={100} 
  height={100} 
  className="ml-[40%]"
/>
</div>
      <p id="date" style={{color:"white", font:"italic" ,fontSize:"15px" ,marginLeft:"32%", paddingLeft:"20px"}}>{weatherData.current.last_updated}</p>

    </div>
  )
}

export default ResultCard
