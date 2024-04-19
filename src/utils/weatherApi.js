import { 
  apiKey,
  latitude,
  longitude,
} from "./constants.js";

export default class WeatherApi
{
  async getWeather()
  {
    return this._getWeatherJson()
      .then((json) => {
        const temperature = Math.round(json.main.temp);
        const tempType = this._getTempType(temperature);

        const weatherId = json.weather[0].id;
        const weatherType = this._getWeatherType(weatherId);
        const dayTime = this._isDayTime(json.sys.sunrise, json.sys.sunset);
        const tempF = `${temperature}°F`;
        const tempC = `${Math.round((temperature- 32) * 5/9)}°C`;

        return {
          temperature: {
            F: tempF,
            C: tempC,
          },
          tempType: tempType,
          weatherType: weatherType,
          dayTime: dayTime,
        }
      });
  }

  async _getWeatherJson()
  {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
      )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject("something went wrong");
        }
      });
  }

  _getTempType(temperature) {
    if (temperature >= 86) {
      return 'hot';
    } else if (temperature >= 66 && temperature <= 85) {
      return 'warm';
    } else if (temperature <= 65) {
      return 'cold';
    }
  }

  _getWeatherType(id) {
    if (id > 800) {
      return 'clouds';
    } else if (id === 800) {
      return 'clear';
    } else if (id === 741) {
      return 'fog';
    } else if (id > 600) {
      return 'snow';
    } else if (id > 300) {
      return 'rain';
    } else if (id > 200) {
      return 'storm';
    }
  }

  _isDayTime(sunrise, sunset) {
    const currentTime = Date.now();
    return currentTime >= sunrise * 1000 && 
      currentTime < sunset * 1000;
  }
}

export const weatherApi = new WeatherApi();