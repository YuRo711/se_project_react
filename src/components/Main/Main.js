import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main(props) {
    return (
      <div className="Main">
        <WeatherCard 
          weatherImage={props.weatherImage}
          temperature={props.temperature} 
        />
        <div className="Main__text">
          Today is {props.temperature} / You may want to wear:
        </div>
        <div className="Main__cards">
          {
            props.cards.filter(
                (card) => card.weather == props.tempType
              )
              .map((card, i) => (
                <ItemCard
                  key={i}
                  data={card} />
              ))
          }
          <ItemCard />
        </div>
      </div>
    );
  }
  
  export default Main;
  