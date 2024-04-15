import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  locationName,
} from "../../utils/constants.js";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Profile from "../Profile/Profile.js";
import Footer from "../Footer/Footer.js";
import ItemModal from "../ItemModal/ItemModal.js";
import AddItemModal from "../AddItemModal/AddItemModal.js";
import "./App.css";
import {CurrentTemperatureUnitContext} from "../../contexts/CurrentTemperatureUnitContext.js";
import {weatherApi} from "../../utils/weatherApi.js";
import {api} from "../../utils/api.js"
import RegisterModal from "../RegisterModal/RegisterModal.js";
import LoginModal from "../LoginModal/LoginModal.js";


function App() {
  //#region Methods

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
      })
      .catch((err) => {console.log(err);});;
  }

  function handleModalClose(modalId) {
    setModalsActivity({...modalsActivity, [modalId]: false});
  }

  function handleModalOpen(modalId) {
    setModalsActivity({...modalsActivity, [modalId]: true});
  }

  function openAnotherModal(modalId, newModalId) {
    setModalsActivity({...modalsActivity, 
      [modalId]: false, [newModalId]: true});
  }

  async function registerUser(name, avatar, email, password) {
    return api.addUser({ name, avatar, email, password });
  }

  async function signIn(email, password) {
    return api.signIn({ email, password });
  }

  //#endregion

  //#region Variables setup

  const currentDate = 
    new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  const [weather, updateWeather] = useState(null);
  const [clothes, updateClothes] = useState(null);
  const [itemModalInfo, setItemModalInfo] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [modalsActivity, setModalsActivity] = useState({
    "item": false,
    "add": false,
    "delete": false,
    "signup": false,
    "login": false,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    api.getItems()
      .then((items) => {
        updateClothes(items.data);
      })
      .catch((err) => { console.log(err); });
      
    weatherApi.getWeather()
      .then((weatherData) => {
        updateWeather(weatherData);
      })
      .catch((err) => { console.log(err); });
  }, []);

  //#endregion

  //#region Rendering

  if (!weather || !clothes && isLoggedIn) {
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
            isLoggedIn={isLoggedIn}
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
                isLoggedIn={isLoggedIn}
              />
            </Route>
            <Route path="*">
              <Redirect to="/" replace/>
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
            isOpen={modalsActivity["add"]}
          />
          <RegisterModal
            openAnotherModal={openAnotherModal}
            altModalId="login"
            closeHandler={handleModalClose}
            modalId="signup"
            isOpen={modalsActivity["signup"]}
          />
          <LoginModal
            openAnotherModal={openAnotherModal}
            altModalId="signup"
            closeHandler={handleModalClose}
            modalId="login"
            isOpen={modalsActivity["login"]}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    );
  }
  
  //#endregion
}

export default App;
