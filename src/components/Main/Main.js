import WeatherCard from "../WeatherCard/WeatherCard";

function Main(props) {
    return (
      <div className="Main">
        <WeatherCard 
            weatherImage={props.weatherImage}
            temperature={props.temperature} 
        />
      </div>
    );
  }
  
  export default Main;
  