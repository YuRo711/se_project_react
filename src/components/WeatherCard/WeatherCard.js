import "./WeatherCard.css";


function WeatherCard(props) {
    return (
      <div className="weatherCard">
        <img className="weatherCard__card"
            src={props.weatherImage}
            alt="weather card image"
        ></img>
        <div className="weatherCard__temperature">{props.temperature}</div>
      </div>
    );
  }
  
  export default WeatherCard;
  