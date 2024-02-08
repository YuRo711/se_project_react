import { 
  defaultClothingItems, 
  apiKey,
  locationName,
  latitude,
  longitude,
} from "../../utils/constants.js";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer.js";
import React from "react";
import sunny from "../../images/weather sunny.png";


function App() {
  const [clothes, updateClothes] = React.useState(defaultClothingItems);
  const [weather, updateWeather] = React.useState();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
    )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject("something went wrong");
      }
    })
    .then((json) => {
      updateWeather(json);
    })
    .catch((err) => { console.log(err); });

  if (!weather) {
    return <div className="App">Loading...</div>
  } else {
    const temperature = Math.round(weather.main.temp);
    const tempType = getTempType(temperature);
    const weatherType = weather.weather[0].main;

    return (
      <div className="App">
        <Header 
          locationName={locationName}
        />
        <Main weatherImage={sunny}
          temperature={temperature+"°F"}
          cards={defaultClothingItems}
          tempType={tempType}
        />
        <Footer />
        {/*
        <ModalWithForm />
        <ItemModal /> */}
      </div>
    );
  }

  function getTempType(temperature) {
    if (temperature >= 86) {
      return 'hot';
    } else if (temperature >= 66 && temperature <= 85) {
      return 'warm';
    } else if (temperature <= 65) {
      return 'cold';
    }
  }
}

export default App;
