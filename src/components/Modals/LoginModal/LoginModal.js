import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal(props) {
  function submitHandler() {
    props.loginHandler(email, password)
      .then(() => {
        props.closeHandler(props.modalId);
        setEmail("");
        setPassword("");
      })
      .catch((err) => {console.log(err);});
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ModalWithForm
      name={props.modalId}
      onClose={props.closeHandler}
      closeButtonClass={props.closeButtonClass}
      title="Log in"
      buttonText="Log in"
      onSubmit={submitHandler}
      isOpen={props.isOpen}
      alternativeButtonText="or Register"
      alternativeButtonHandler={props.openAnotherModal}
      altModalId={props.altModalId}
      buttonNoMargin={true}
    >
      <label className="modal_type_form__label" htmlFor="email-input">Email</label>
      <input type="text"
        className="modal_type_form__input"
        placeholder="Email"
        id="email-input"
        value={email}
        onChange={(e) => {setEmail(e.target.value)}}
        required
      />

      <label className="modal_type_form__label" htmlFor="password-input">Password</label>
      <input type="password"
        className="modal_type_form__input"
        placeholder="Password"
        id="password-input"
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}
        required
      />
    </ModalWithForm>
  );
}

export default LoginModal;
