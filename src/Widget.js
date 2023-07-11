import React from 'react'
import './App.css'

const Widget = ({temp,
  humidity,
  pressure,
  mood,
  name,
  speed,
  country,
  sunset,}) => {

    let sec = sunset;
    let sunsetTime = new Date(sec * 1000);
    let timeStr = `${sunsetTime.getHours()}:${sunsetTime.getMinutes()}`;

    const [weatherState, setWeatheState] = React.useState("");

    React.useEffect(() => {
      if (mood) {
        switch (mood) {
          case "Clouds":
            setWeatheState("wi-day-cloudy");
            break;
          case "Haze":
            setWeatheState("wi-fog");
            break;
          case "Clear":
            setWeatheState("wi-day-sunny");
            break;
          case "Mist":
            setWeatheState("wi-dust");
            break;
  
          default:
            setWeatheState("wi-day-sunny");
            break;
        }
      }
    }, [mood]);


    console.log(temp);

  let dat = new Date();
  let time = dat.toLocaleTimeString();
  let date = dat.toLocaleDateString();


  return (
    <div>
      <>
      <div className="display">

        <div className='weatherIcon'> 
          <i className={`wi ${weatherState}`}></i>
        </div> 

        <div className="weatherInfo">
          <div className='temp'> {temp}&deg;</div>
          <div className='info'> <p>{mood}</p> <p className='tag'>{name}, {country}</p> </div> 
        </div>

        <div className="TimeDate">
          <div>{date}</div>
          <div>{time}</div>
        </div>

        <div className='sunset'>
          <i className='wi wi-sunset'></i>
          <p>Sunset,{timeStr}</p>
        </div>

        <div className='humidity'>
        <i className='wi wi-humidity'></i>
          <div>Humidity,{humidity}</div>
        </div>

        <div className='pressure'>
        <i className='wi wi-rain'></i>
          <div>Pressure,{pressure}</div>
        </div>

        <div className='wind'>
        <i className='wi wi-strong-wind'></i>
          <div>Wind,{speed}</div>
        </div>

        </div>
      </>
    </div>
  )
}

export default Widget
