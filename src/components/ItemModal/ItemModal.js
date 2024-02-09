import Modal from "../Modal/Modal";

function ItemModal(props) {
    const image = props.data.link;
    const name = props.data.name;
    const weather = props.data.weather;

    return (
      <div className="ItemModal">
        <Modal
          isVisible={props.isVisible}
          setVisibility={props.setVisibility}
        >
          <div className="ItemModal__container">
            <button type="button"
              className="Modal__close-button Modal__close-button_white"
              onClick={() => {
                props.setVisibility(false);
              }}
            ></button>
            <img className="ItemModal__image"
              src={image}
            />
            <div className="ItemModal__name">{name}</div>
            <div className="ItemModal__weather">Weather: {weather}</div>
          </div>
        </Modal>
      </div>
    );

    function openImageModal() {
      
    }
  }
  
  export default ItemModal;
  