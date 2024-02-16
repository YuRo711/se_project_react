import { 
  defaultClothingItems,
  locationName,
  weatherImagesDay,
  weatherImagesNight,
} from "../../utils/constants.js";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import ItemModal from "../ItemModal/ItemModal.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";
import WeatherApi from "../../utils/weatherApi.js";
import React from "react";
import "./App.css";
import NewItemModal from "../NewItemModal/NewItemModal.js";


function App() {
  const currentDate = 
    new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  const api = new WeatherApi();
  const [weather, updateWeather] = React.useState(null);
  const [clothes, updateClothes] = React.useState(defaultClothingItems);
  const [itemModalInfo, setItemModalInfo] = React.useState({});

  React.useEffect(() => {
    api.getWeather()
      .then((weatherData) => {
        updateWeather(weatherData);
      })
      .catch((err) => { console.log(err); });
  }, []);

  if (!weather) {
    return <div className="App">Loading...</div>
  } else {
    const weatherImage = weather.dayTime ?
      weatherImagesDay[weather.weatherType] :
      weatherImagesNight[weather.weatherType];

    return (
      <div className="App">
        <Header 
          locationName={locationName}
          currentDate={currentDate}
          openModalHandler={handleModalOpen}
        />
        <Main weatherImage={weatherImage}
          temperature={weather.temperature+"°F"}
          cards={clothes}
          tempType={weather.tempType}
          setItemModalInfo={setItemModalInfo}
          openModalHandler={handleModalOpen}
        />
        <Footer />
        <ItemModal
          data={itemModalInfo}
          closeHandler={handleModalClose}
          modalId="item"
          closeButtonClass="modal__close-button_white"
        />
        <NewItemModal 
          addItem={addItem}
          closeHandler={handleModalClose}
          modalId="add"
          closeButtonClass="modal__close-button_gray"
        />
      </div>
    );
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

  function handleModalClose(modalId) {
    document.querySelector(`#${modalId}`).classList.remove("modal_opened");
  }

  function handleModalOpen(modalId) {
    document.querySelector(`#${modalId}`).classList.add("modal_opened");
  }
}

export default App;
