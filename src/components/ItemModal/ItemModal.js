import "./ItemModal.css";
import { Modal } from "../Modal/Modal";

function ItemModal(props) {
    const image = props.data.link;
    const name = props.data.name;
    const weather = props.data.weather;
    const closeButtonClass = props.data.closeButtonClass;

    return (
      <Modal 
        name={props.modalId}
        onClose={props.closeHandler}
        closeButtonClass={props.closeButtonClass}
        type="item"
        modalsOpened={props.modalsOpened}
      >
        <img className="modal_type_item__image"
          src={image}
          alt={name}
        />
        <p className="modal_type_item__name">{name}</p>
        <p className="modal_type_item__weather">Weather: {weather}</p>
      </Modal>
    );
  }
  
  export default ItemModal;
  