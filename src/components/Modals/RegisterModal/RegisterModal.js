import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal(props) {
  function submitHandler() {
    props.signupHandler(name, avatar, email, password)
      .then(() => {
        props.closeHandler(props.modalId);
        setEmail("");
        setPassword("");
        setName("");
        setAvatar("");
      })
      .catch((err) => {console.log(err);});;
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  return (
    <ModalWithForm
      name={props.modalId}
      onClose={props.closeHandler}
      closeButtonClass={props.closeButtonClass}
      title="Sign up"
      buttonText="Next"
      onSubmit={submitHandler}
      isOpen={props.isOpen}
      alternativeButtonText="or Log in"
      alternativeButtonHandler={props.openAnotherModal}
      altModalId={props.altModalId}
      buttonNoMargin={true}
    >
      <label className="modal_type_form__label" htmlFor="email-input-signin">Email*</label>
      <input type="text"
        className="modal_type_form__input"
        placeholder="Email"
        id="email-input-signin"
        value={email}
        onChange={(e) => {setEmail(e.target.value)}}
        required
      />

      <label className="modal_type_form__label" htmlFor="password-input-signin">Password*</label>
      <input type="password"
        className="modal_type_form__input"
        placeholder="Password"
        id="password-input-signin"
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}
        required
      />

      <label className="modal_type_form__label" htmlFor="name-input-signin">Name</label>
      <input type="text"
        className="modal_type_form__input"
        placeholder="Name"
        id="name-input-signin"
        value={name}
        onChange={(e) => {setName(e.target.value)}}
      />

      <label className="modal_type_form__label" htmlFor="avatar-input-signin">Avatar URL</label>
      <input type="text"
        className="modal_type_form__input"
        placeholder="Avatar URL"
        id="avatar-input-signin"
        value={avatar}
        onChange={(e) => {setAvatar(e.target.value)}}
      />
    </ModalWithForm>
  );
}

export default RegisterModal;
