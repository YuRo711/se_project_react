import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal(props) {
  function submitHandler() {
    props.addItem(name, image, weather)
      .then(() => {
        props.closeHandler(props.modalId);
        setName("");
        setImage("");
        setWeather("");
      })
      .catch((err) => {console.log(err);});;
  }

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [weather, setWeather] = useState('');

  return (
    <ModalWithForm
      name={props.modalId}
      onClose={props.closeHandler}
      closeButtonClass={props.closeButtonClass}
      title="New garment"
      buttonText="Add garment"
      onSubmit={submitHandler}
      isOpen={props.isOpen}
    >
      <label className="modal_type_form__label" htmlFor="name-input-item">Name</label>
      <input type="text"
        className="modal_type_form__input"
        placeholder="Name"
        id="name-input-item"
        value={name}
        onChange={(e) => {setName(e.target.value)}}
        required
      />

      <label className="modal_type_form__label" htmlFor="link-input-item">Image</label>
      <input type="url"
        className="modal_type_form__input"
        placeholder="Image URL"
        id="link-input-item"
        value={image}
        onChange={(e) => {setImage(e.target.value)}}
        required
      />

      <label className="modal_type_form__label modal_type_form__label_radio">
        Select the weather type:
      </label>
      <div className="modal_type_form__radio-buttons">
        <label htmlFor="weather" className="modal_type_form__radio">
          <input type="radio"
            className="modal_type_form__radio-button"
            value="hot"
            onChange={(e) => {setWeather(e.target.value)}}
            id="weather-hot"
            name="weather"/>
          <label className="modal_type_form__radio-label" htmlFor="weather-hot">
            Hot
          </label>
        </label>

        <label htmlFor="weather" className="modal_type_form__radio">
          <input type="radio"
            className="modal_type_form__radio-button"
            value="warm"
            onChange={(e) => {setWeather(e.target.value)}}
            id="weather-warm"
            name="weather"/>
            <label className="modal_type_form__radio-label" htmlFor="weather-warm">
              Warm
            </label>
        </label>

        <label htmlFor="weather" className="modal_type_form__radio">
          <input type="radio"
            className="modal_type_form__radio-button"
            value="cold"
            onChange={(e) => {setWeather(e.target.value)}}
            id="weather-cold"
            name="weather"/>
            <label className="modal_type_form__radio-label" htmlFor="weather-cold">
              Cold
            </label>
        </label>
      </div>
    </ModalWithForm>
  );
}

export default AddItemModal;
