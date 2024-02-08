import "./WeatherCard.css";


function WeatherCard(props) {
    return (
      <div className="WeatherCard">
        <img className="WeatherCard__card"
            src={props.weatherImage}
            alt="weather card image"
        ></img>
        <div className="WeatherCard__temperature">{props.temperature}</div>
      </div>
    );
  }
  
  export default WeatherCard;
  