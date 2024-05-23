import {React, useState} from 'react'
import SearchBox from './SearchBox'
import InfoCard from './InfoCard'

const WeatherApp = () => {
    let [info, setInfo] = useState({
      cityname : "Mohali",
      feels_like : 35,
      temp : 30,
      humidity : 20,
      pressure : 1010,
      weather : "Scattered Clouds"
    })

    let updateInfo = (newInfo) =>{
        setInfo(newInfo);
    }

  return (
    <div>
        <SearchBox updateInfo={updateInfo}/>
        <InfoCard info={info}/>
    </div>
  )
}

export default WeatherApp;