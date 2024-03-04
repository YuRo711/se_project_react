import { 
  defaultClothingItems,
  locationName,
} from "../../utils/constants.js";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Profile from "../Profile/Profile.js";
import Footer from "../Footer/Footer.js";
import ItemModal from "../ItemModal/ItemModal.js";
import WeatherApi from "../../utils/weatherApi.js";
import React, { useRef, useState } from "react";
import "./App.css";
import AddItemModal from "../AddItemModal/AddItemModal.js";
import {CurrentTemperatureUnitContext} from "../../contexts/CurrentTemperatureUnitContext.js";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min.js";


function App() {
  const currentDate = 
    new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  const api = new WeatherApi();
  const [weather, updateWeather] = useState(null);
  const [clothes, updateClothes] = useState(defaultClothingItems);
  const [itemModalInfo, setItemModalInfo] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [modalsActivity, setModalsActivity] = useState({
    "item": false,
    "add": false,
    "delete": false,
  });

  React.useEffect(() => {
    api.getWeather()
      .then((weatherData) => {
        updateWeather(weatherData);
      })
      .catch((err) => { console.log(err); });
  }, []);

  if (!weather) {
    return <div className="page">Loading...</div>
  } else {
    return (
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header 
            locationName={locationName}
            currentDate={currentDate}
            openModalHandler={handleModalOpen}
          />
          <Switch>
            <Route path="/profile">
              <Profile
                cards={clothes}
                openModalHandler={handleModalOpen}
                setItemModalInfo={setItemModalInfo}
              />
            </Route>
            <Route path="/">
              <Main
                weather={weather}
                cards={clothes}
                setItemModalInfo={setItemModalInfo}
                openModalHandler={handleModalOpen}
              />
            </Route>
          </Switch>
          <Footer />
          <ItemModal
            data={itemModalInfo}
            closeHandler={handleModalClose}
            modalId="item"
            closeButtonClass="modal__close-button_white"
            isOpen={modalsActivity["item"]}
            handleCardDelete={handleCardDelete}
          />
          <AddItemModal 
            addItem={addItem}
            closeHandler={handleModalClose}
            modalId="add"
            closeButtonClass="modal__close-button_gray"
            isOpen={modalsActivity["add"]}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    );
  }

  function handleToggleSwitchChange() {
    currentTemperatureUnit === 'F'
      ? setCurrentTemperatureUnit('C')
      : setCurrentTemperatureUnit('F');
  };

  function addItem(name, link, weather) {
    const len = clothes.length;
    const newItem = {
      _id: len,
      name: name,
      link: link,
      weather: weather,
    };
    updateClothes([item, ...clothes]);
  }

  function handleCardDelete() {
    handleModalClose("item");
  }

  function handleModalClose(modalId) {
    setModalsActivity({...modalsActivity, [modalId]: false});
  }

  function handleModalOpen(modalId) {
    setModalsActivity({...modalsActivity, [modalId]: true});
  }
}

export default App;
