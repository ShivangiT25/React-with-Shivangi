import React, {useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBox = ({updateInfo}) => {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const api_url = "https://api.openweathermap.org/data/2.5/weather?q=";
  const api_key = "3a0a705369e3ef7f859a521033efc3f8";

    let getWeatherInfo= async() =>{
    try{
    let response = await fetch(`${api_url}${city}&appid=${api_key}&units=metric`);
    let data = await response.json();
    
  let result ={
      cityname : city,
      feels_like : data.main.feels_like,
      temp : data.main.temp,
      humidity : data.main.humidity,
      pressure : data.main.pressure,
      weather : data.weather[0].description
    }
    // console.log(result);
    return result;
   }catch(error){
    throw error;
  }}
  
  let handleChange = (e) =>{
    setCity(e.target.value);
  };

  let handleSubmit = async(e) =>{
    try{
      e.preventDefault();
      // setCity(e.target.value);
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo()
      updateInfo(newInfo);
    }catch(error){
      setError(true);
    }
    };

  return (
    <div>
      <div className='text-center text-2xl mx-20 font-bold font-serif underline text-blue-700'>
        <h1>WeatherApp</h1>
        <form onSubmit={handleSubmit}>
        <div className="text-center my-2">
          <TextField style={{border: "0.5px solid grey", borderRadius: "10px", backgroundColor:'white'}}
          required //its a required field
          label="Search City"
          value={city}
          onChange={handleChange}
          />
          </div>
          <div className=''>
            <Button style={{border: "0.5px solid black", borderRadius: "10px"}}
            type="submit" 
            variant="contained"
            size="small">
              Search
            </Button>
          </div>
      </form>
      {error && <i><p style={{color:'red', fontWeight:'bold'}}>Invalid City Name. Please Search For Another City</p></i>}
    </div> 
    </div>
  )
}

export default SearchBox