import "./ModalWithForm.css";
import { Modal } from "../Modal/Modal";

function ModalWithForm(props) {
  return (
    <Modal
        name={props.name}
        onClose={props.onClose}
        closeButtonClass={props.closeButtonClass}
        type="form"
      >
      <div className="modal_type_form__title">{props.title}</div>

      <form className="modal_type_form__form"
        onSubmit={(event) => {
          event.preventDefault();
          props.onClose(props.name);
          props.onSubmit();
        }}
      >

        {props.children}

        <button type="submit"
          className="modal_type_form__submit-button"
        >
          {props.buttonText}
        </button>
      </form>
    </Modal>
  );
}

export default ModalWithForm;
