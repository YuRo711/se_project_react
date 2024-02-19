import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main(props) {
    return (
      <div className="main">
        <WeatherCard 
          weatherImage={props.weatherImage}
          temperature={props.temperature} 
        />
        <div className="main__text">
          Today is {props.temperature} / You may want to wear:
        </div>
        <div className="main__cards">
          {
            props.cards.filter(
                (card) => card.weather == props.tempType
              )
              .map((card, i) => (
                <ItemCard
                  key={i}
                  data={card}
                  openModalHandler={props.openModalHandler}
                  setItemModalInfo={props.setItemModalInfo}
                />
              ))
          }
          <ItemCard />
        </div>
      </div>
    );
  }
  
  export default Main;
  