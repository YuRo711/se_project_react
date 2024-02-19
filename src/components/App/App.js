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
  const [modalsOpened, setModalsActivity] = React.useState({
    "item": false,
    "add": false,
  });

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
          modalsOpened={modalsOpened}
        />
        <NewItemModal 
          addItem={addItem}
          closeHandler={handleModalClose}
          modalId="add"
          closeButtonClass="modal__close-button_gray"
          modalsOpened={modalsOpened}
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
    setModalsActivity({...modalsOpened, [modalId]: false});
  }

  function handleModalOpen(modalId) {
    setModalsActivity({...modalsOpened, [modalId]: true});
  }
}

export default App;
