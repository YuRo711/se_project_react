import { 
  defaultClothingItems, 
  apiKey,
  locationName,
  latitude,
  longitude,
  weatherImagesDay,
  weatherImagesNight,
} from "../../utils/constants.js";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import ItemModal from "../ItemModal/ItemModal.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";
import React from "react";


function App() {
  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  const [weather, updateWeather] = React.useState();
  const [clothes, updateClothes] = React.useState(defaultClothingItems);
  
  const [itemModalVisible, setItemModalVis] = React.useState(false);
  const [itemModalInfo, setItemModalInfo] = React.useState({});
  const [addModalVisible, setAddModalVis] = React.useState(false);

  React.useEffect(() => {
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
  }, []);

  if (!weather) {
    return <div className="App">Loading...</div>
  } else {
    const temperature = Math.round(weather.main.temp);
    const tempType = getTempType(temperature);

    const weatherId = weather.weather[0].id;
    const weatherType = getWeatherType(weatherId);
    const dayTime = isDayTime(weather.sys.sunrise, weather.sys.sunset);
    const weatherImage = dayTime ?
      weatherImagesDay[weatherType] :
      weatherImagesNight[weatherType];

    return (
      <div className="App">
        <Header 
          setAddModalVis={setAddModalVis}
          locationName={locationName}
          currentDate={currentDate}
        />
        <Main weatherImage={weatherImage}
          temperature={temperature+"°F"}
          cards={clothes}
          tempType={tempType}
          setItemModalVis={setItemModalVis}
          setItemModalInfo={setItemModalInfo}
        />
        <Footer />
        <ItemModal
          setVisibility={setItemModalVis}
          isVisible={itemModalVisible}
          data={itemModalInfo}
        />
        <ModalWithForm 
          setVisibility={setAddModalVis}
          isVisible={addModalVisible}
          addItem={addItem}
        />
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

  function getWeatherType(id) {
    if (id > 800) {
      return 'clouds';
    } else if (id == 800) {
      return 'clear';
    } else if (id == 741) {
      return 'fog';
    } else if (id > 600) {
      return 'snow';
    } else if (id > 300) {
      return 'rain';
    } else if (id > 200) {
      return 'storm';
    }
  }

  function isDayTime(sunrise, sunset) {
    const currentTime = Date.now();
    return currentTime >= sunrise * 1000 && 
      currentTime < sunset * 1000;
  }

  function addItem(name, link, weather) {
    const len = clothes.length;
    updateClothes(clothes.concat([
      {
        _id: len,
        name: name,
        link: link,
        weather: weather,
      }
    ]))
  }
}

export default App;
