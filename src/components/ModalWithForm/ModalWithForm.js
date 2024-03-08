import "./ModalWithForm.css";
import { Modal } from "../Modal/Modal";

function ModalWithForm(props) {
  return (
    <Modal
        name={props.name}
        onClose={props.onClose}
        closeButtonClass={props.closeButtonClass}
        type="form"
        isOpen={props.isOpen}
      >
      <p className="modal_type_form__title">{props.title}</p>

      <form className="modal_type_form__form"
        onSubmit={(event) => {
          event.preventDefault();
          props.onSubmit();
        }}
        id={`${props.name}-form`}
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
