import React, { useEffect, useState } from 'react'
import './App.css'
import Widget from './Widget';

const Search = () => {
  const [City,setCity] = useState('vijayawada');
  const [tempInfo, settempInfo] = useState({});

  const getInfo = async() =>{
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=5d94bce05d182fced6ab43df20c1327e`;
      let data = await fetch(url);
      data = await data.json();
      //console.log(data);

      const {temp,humidity,pressure} = data.main;
      const {main:mood} = data.weather[0];
      const {country,sunset} = data.sys;
      const {name} = data;
      const {speed} = data.wind;

      const information = {
        temp,
        humidity,
        pressure,
        country,
        sunset,
        name,
        mood,
        speed,
      };
      //console.log(information);
      settempInfo(information);

      //console.log(information.temp)
    }
    catch(error){
      alert("Sorry, couldn't fetch");
      console.log(error);
    }
  }

  useEffect( () => {
    getInfo();
  }, [])

  //console.log(tempInfo.temp)
  return (
    <div>
      <div className='search_place'>
      <input type='text' placeholder='Enter....' id='search' value={City} onChange={(e) => setCity(e.target.value)}/> 
      <button type='submit' id='sbutton' onClick={getInfo}> Get </button>
      </div>

      <Widget {...tempInfo} />
    </div>
  )
}

export default Search
