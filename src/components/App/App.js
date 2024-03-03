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
import React from "react";
import "./App.css";
import NewItemModal from "../NewItemModal/NewItemModal.js";
import {CurrentTemperatureUnitContext} from "../../contexts/CurrentTemperatureUnitContext.js";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min.js";


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
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = React.useState('F');

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
            modalsOpened={modalsOpened}
          />
          <NewItemModal 
            addItem={addItem}
            closeHandler={handleModalClose}
            modalId="add"
            closeButtonClass="modal__close-button_gray"
            modalsOpened={modalsOpened}
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
