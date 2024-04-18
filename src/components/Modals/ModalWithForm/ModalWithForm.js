import "./ModalWithForm.css";
import { Modal } from "../Modal/Modal";

function ModalWithForm(props) {
  const altButton = props.alternativeButtonText ? 
    (<button type="button"
      className="modal_type_form__alt-button"
      onClick={() => 
        props.alternativeButtonHandler(props.name, props.altModalId)}
    >
      {props.alternativeButtonText}
    </button>)
    : "";

  return (
    <Modal
        name={props.name}
        onClose={props.onClose}
        closeButtonClass="modal__close-button_gray"
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

        <div className={"modal_type_form__buttons" +
              `${props.buttonNoMargin ?
                  " modal_type_form__buttons_no-margin" : ""}`}>
          <button type="submit"
            className="modal_type_form__submit-button"
          >
            {props.buttonText}
          </button>
          {altButton}
        </div>
      </form>
    </Modal>
  );
}

export default ModalWithForm;
