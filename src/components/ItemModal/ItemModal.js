import "./ItemModal.css";
import { Modal } from "../Modal/Modal";

function ItemModal(props) {
    const image = props.data.imageUrl;
    const name = props.data.name;
    const weather = props.data.weather;

    return (
      <Modal 
        name={props.modalId}
        onClose={props.closeHandler}
        closeButtonClass={props.closeButtonClass}
        type="item"
        isOpen={props.isOpen}
      >
        <img className="modal_type_item__image"
          src={image}
          alt={name}
        />
        <div className="modal_type_item__text">
          <div className="modal_type_item__left-column">
            <p className="modal_type_item__name">{name}</p>
            <p className="modal_type_item__weather">Weather: {weather}</p>
          </div>
            <button className="modal_type_item__delete"onClick={() => {
              props.handleCardDelete(props.data._id);
            }}>
              Delete item
            </button>
        </div>
      </Modal>
    );
  }
  
  export default ItemModal;
  