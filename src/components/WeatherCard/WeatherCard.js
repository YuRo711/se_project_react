import "./WeatherCard.css";
import { 
  weatherImagesDay,
  weatherImagesNight,
} from "../../utils/constants.js";
import { useContext } from "react";
import {CurrentTemperatureUnitContext} from "../../contexts/CurrentTemperatureUnitContext.js";


function WeatherCard(props) {
  const currentTemperatureUnit = 
    useContext(CurrentTemperatureUnitContext).currentTemperatureUnit;
  const weatherImage = props.weather.dayTime ?
    weatherImagesDay[props.weather.weatherType] :
    weatherImagesNight[props.weather.weatherType];
  const temperature = props.weather.temperature[currentTemperatureUnit];

    return (
      <div className="weatherCard">
        <img className="weatherCard__card"
            src={weatherImage}
            alt="weather card"
        ></img>
        <div className="weatherCard__temperature">{temperature}</div>
      </div>
    );
  }
  
  export default WeatherCard;
  