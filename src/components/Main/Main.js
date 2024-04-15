import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import { useContext } from "react";
import {CurrentTemperatureUnitContext} from "../../contexts/CurrentTemperatureUnitContext.js";

function Main(props) {
  const currentTemperatureUnit = 
    useContext(CurrentTemperatureUnitContext).currentTemperatureUnit;
  const temperature = props.weather.temperature[currentTemperatureUnit];

  return (
    <main className="main">
      <WeatherCard 
        weather={props.weather}
      />
      <div className="main__text">
        { props.isLoggedIn ? 
            `Today is ${temperature} / You may want to wear:` :
            "Log in to see garment suggestions"
        }
      </div>
      <div className="main__cards">
        {
          props.cards.filter(
              (card) => card.weather == props.weather.tempType
            )
            .map((card, i) => (
              <ItemCard
                key={card._id}
                data={card}
                openModalHandler={props.openModalHandler}
                setItemModalInfo={props.setItemModalInfo}
              />
            ))
        }
        <ItemCard />
      </div>
    </main>
  );
}
  
export default Main;
  