import React, { useEffect, useState } from 'react'
import SeachComponent from './SeachComponent'
import './Weather.css'

function Weather() {

    const[search,setSeach] = useState("");
    const[loading,setLoading] = useState(false);
    const[weatherData,setWeatherData] = useState(null)

    async function fetchWeather(param) {
        setLoading(true)
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e00048c98d19ce1e050bfbc8e6d2bbe0`)
            const data = await response.json()
            console.log(data);
            if(data){
                setWeatherData(data)
                setLoading(false)
            }
        }catch{(e) =>{
            setLoading(false)
            console.log(e);
        }}
    }

    async function handleSearch() {
        fetchWeather(search)
    }

    function getCurrentDate(){
        return new Date().toLocaleDateString("en-us",{
            weekday: 'long' ,
            month : 'long',
            day : 'numeric',
            year : 'numeric'
        })
    }

    useEffect(()=> {
        fetchWeather("kolkata")
    },[])

    return (
        <div className='big-container'>
            <SeachComponent
                search={search}
                setSeach={setSeach}
                handleSearch={handleSearch}
            />
            {
                loading? <h2>Loading, please wait!</h2> :
                    <div>
                        <div className='city'>
                            <h2>{weatherData?.name},<span>{weatherData?.sys?.country}</span></h2>
                        </div>
                        <div className='date'>
                            <span>{getCurrentDate()}</span>
                        </div>
                        <div className='temp'>
                            <h2>Temperature: {(weatherData?.main?.temp - 273.15).toFixed(1)}°C</h2>
                            <h2>{weatherData && weatherData.weather && weatherData.weather[0]? weatherData.weather[0].description : ""}</h2>
                        </div>
                    </div>
            }
        </div>
  )
}

export default Weather
