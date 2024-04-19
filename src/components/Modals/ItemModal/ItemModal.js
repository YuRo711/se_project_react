import "./ItemModal.css";
import { Modal } from "../Modal/Modal";
import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

function ItemModal(props) {
  const currentUser = useContext(CurrentUserContext);
  const image = props.data.imageUrl;
  const name = props.data.name;
  const weather = props.data.weather;
  const isOwn = props.data.owner === currentUser._id;
  const deleteButtonClassName = (
    `modal_type_item__delete${isOwn ? '' : ' modal_type_item__delete_hidden'}`
  );

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
          <button className={deleteButtonClassName}
          onClick={() => {
            props.handleCardDelete(props.data._id);
          }}>
            Delete item
          </button>
      </div>
    </Modal>
  );
}
  
  export default ItemModal;
  