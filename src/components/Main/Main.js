import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main(props) {
    return (
      <main className="main">
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
  