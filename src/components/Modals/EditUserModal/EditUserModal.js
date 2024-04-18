import { useContext, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

function EditUserModal(props) {
  function submitHandler() {
		props.updateHandler({ name, avatar })
			.then(() => {
				props.setCurrentUser(
					{...currentUser, name: name, avatar: avatar}
				);
        props.closeHandler(props.modalId);
			})
      .catch((err) => {console.log(err);});
  }

	const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [avatar, setAvatar] = useState(currentUser.avatar);

  return (
    <ModalWithForm
      name={props.modalId}
      onClose={props.closeHandler}
      closeButtonClass={props.closeButtonClass}
      title="Change profile data"
      buttonText="Save changes"
      onSubmit={submitHandler}
      isOpen={props.isOpen}
      buttonNoMargin={true}
    >
      <label className="modal_type_form__label" htmlFor="name-input">Name*</label>
      <input type="text"
        className="modal_type_form__input"
        placeholder="Name"
        id="name-input"
        value={name}
        onChange={(e) => {setName(e.target.value)}}
      />


      <label className="modal_type_form__label" htmlFor="avatar-input">Avatar*</label>
      <input type="text"
        className="modal_type_form__input"
        placeholder="Avatar URL"
        id="avatar-input"
        value={avatar}
        onChange={(e) => {setAvatar(e.target.value)}}
      />
    </ModalWithForm>
  );
}

export default EditUserModal;
