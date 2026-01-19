"use client"
import React,{useState} from 'react'
import InputCard from './InputCard'
import ResultCard from './ResultCard'
import ErrorPage from '../error'


const weatherApp = () => {
  const [weatherData,setWeatherData] = useState(null);

  const handleSearch = async(city) => {
   const API_KEY="622092c21d0c4dffa0671116251909"
   
    try{
       const response= await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`
       )
    if (!response.ok) {
    <ErrorPage/>
  }
       const data= await response.json();
       setWeatherData(data);
      }
    
    catch (error) {
      console.error("Error fetching weather:", error);
  }
}

    return (
     <div>
      <div className='w-full h-[100vh] flex flex-col justify-center items-center gap-4 bg-black'>
      <div className='font-bold text-white text-[23px]'><span className='text-blue-600 font-bold'>Weather</span> APP</div>
      <p className='text-white font-light italic'>Get the weather details of any city, Right Now!</p>
      <InputCard onSearch={handleSearch} />
      <ResultCard weatherData={weatherData} />
    </div>
    </div>
  )
}

export default weatherApp
