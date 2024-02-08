function ItemModal(props) {
    const image = props.link;
    const name = props.name;
    const weather = props.name;

    return (
      <div className="ItemModal">
        <button type="button" className="ItemModal__close-button"></button>
        <div className="ItemModal__image-wrapper">
            <img className="ItemModal__image"
                src={image}
            />
        </div>
        <div className="ItemModal__name">{name}</div>
        <div className="ItemModal__weather">Weather: {weather}</div>
      </div>
    );
  }
  
  export default ItemModal;
  