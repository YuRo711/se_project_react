import {
  locationName,
} from "../../utils/constants.js";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Profile from "../Profile/Profile.js";
import Footer from "../Footer/Footer.js";
import ItemModal from "../ItemModal/ItemModal.js";
import AddItemModal from "../AddItemModal/AddItemModal.js";
import React, { useState, useEffect } from "react";
import "./App.css";
import {CurrentTemperatureUnitContext} from "../../contexts/CurrentTemperatureUnitContext.js";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min.js";
import WeatherApi from "../../utils/weatherApi.js";
import Api from "../../utils/api.js";


function App() {
  const currentDate = 
    new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  const weatherApi = new WeatherApi();
  const api = new Api();
  const [weather, updateWeather] = useState(null);
  const [clothes, updateClothes] = useState(null);
  const [itemModalInfo, setItemModalInfo] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [modalsActivity, setModalsActivity] = useState({
    "item": false,
    "add": false,
    "delete": false,
  });

  useEffect(() => {
    api.getItems()
      .then((items) => {
        updateClothes(items);
      })
      .catch((err) => { console.log(err); });
      
    weatherApi.getWeather()
      .then((weatherData) => {
        updateWeather(weatherData);
      })
      .catch((err) => { console.log(err); });
  }, []);

  if (!weather || !clothes) {
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

  async function addItem(name, link, weather) {
    const newItem = {
      name: name,
      imageUrl: link,
      weather: weather,
    };
    return api.addItem(newItem)
      .then((newItem) => {
        updateClothes([newItem, ...clothes]);
    });
  }

  function handleCardDelete(id) {
    api.deleteItem(id)
      .then(() => {
        updateClothes(clothes.filter(item => item._id != id));
        handleModalClose("item");
      });
  }

  function handleModalClose(modalId) {
    setModalsActivity({...modalsActivity, [modalId]: false});
  }

  function handleModalOpen(modalId) {
    setModalsActivity({...modalsActivity, [modalId]: true});
  }
}

export default App;
