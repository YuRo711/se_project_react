import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  locationName,
} from "../../utils/constants.js";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Profile from "../Profile/Profile.js";
import Footer from "../Footer/Footer.js";
import ItemModal from "../Modals/ItemModal/ItemModal.js";
import AddItemModal from "../Modals/AddItemModal/AddItemModal.js";
import "./App.css";
import {CurrentTemperatureUnitContext} from "../../contexts/CurrentTemperatureUnitContext.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import {weatherApi} from "../../utils/weatherApi.js";
import {api} from "../../utils/api.js"
import RegisterModal from "../Modals/RegisterModal/RegisterModal.js";
import LoginModal from "../Modals/LoginModal/LoginModal.js";
import { getToken, removeToken, setToken } from "../../utils/token.js";
import EditUserModal from "../Modals/EditUserModal/EditUserModal.js";


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

  async function handleUpdateUser(data) {
    return api.updateUser(data);
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
    return api.addUser({ name, avatar, email, password })
      .then((res) => {
        setToken(res.token);
        setIsLoggedIn(true);
      });
  }

  async function signIn(email, password) {
    return api.signIn({ email, password })
      .then((res) => {
        setToken(res.token);
        setIsLoggedIn(true);
      });
  }

  function logOut() {
    removeToken();
  }

  function handleCardLike(id, isLiked) {
    const userId = currentUser._id;
    !isLiked
      ?
        api
          .addCardLike(id)
          .then((updatedCard) => {
            updateClothes((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      :
        api
          .removeCardLike(id) 
          .then((updatedCard) => {
            updateClothes((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

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
    "edit-user": false,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const token = getToken();
    if (token) {
      setIsLoggedIn(true);
      api.auth(token)
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch((err) => { console.log(err) });
    }

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
        <CurrentUserContext.Provider value={currentUser}>
          <Header 
            locationName={locationName}
            currentDate={currentDate}
            openModalHandler={handleModalOpen}
            isLoggedIn={isLoggedIn}
          />
          <Switch>
            <Route path="/profile">
              {isLoggedIn ?
                <Profile
                  cards={clothes}
                  openModalHandler={handleModalOpen}
                  setItemModalInfo={setItemModalInfo}
                  onCardLike={handleCardLike}
                  logOutHandler={logOut}
                /> :
                <Redirect to="/" replace></Redirect>
              }
            </Route>
            <Route path="/">
              <Main
                weather={weather}
                cards={clothes}
                setItemModalInfo={setItemModalInfo}
                openModalHandler={handleModalOpen}
                isLoggedIn={isLoggedIn}
                onCardLike={handleCardLike}
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
            signupHandler={registerUser}
            modalId="signup"
            isOpen={modalsActivity["signup"]}
          />
          <LoginModal
            openAnotherModal={openAnotherModal}
            altModalId="signup"
            closeHandler={handleModalClose}
            loginHandler={signIn}
            modalId="login"
            isOpen={modalsActivity["login"]}
          />
          <EditUserModal
            closeHandler={handleModalClose}
            modalId="edit-user"
            isOpen={modalsActivity["edit-user"]}
            updateHandler={handleUpdateUser}
            setCurrentUser={setCurrentUser}
          />
        </CurrentUserContext.Provider>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    );
  }
  
  //#endregion
}

export default App;
