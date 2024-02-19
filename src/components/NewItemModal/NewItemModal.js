import ModalWithForm from "../ModalWithForm/ModalWithForm";

function NewItemModal(props) {
  return (
    <ModalWithForm
      name={props.modalId}
      onClose={props.closeHandler}
      closeButtonClass={props.closeButtonClass}
      title="New garment"
      buttonText="Add garment"
      onSubmit={submitHandler}
      modalsOpened={props.modalsOpened}
    >
      <label className="modal_type_form__label" htmlFor="name-input">Name</label>
      <input type="text"
        className="modal_type_form__input"
        placeholder="Name"
        id="name-input"
        required
      />

      <label className="modal_type_form__label" htmlFor="link-input">Image</label>
      <input type="url"
        className="modal_type_form__input"
        placeholder="Image URL"
        id="link-input"
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
            id="weather-cold"
            name="weather"/>
            <label className="modal_type_form__radio-label" htmlFor="weather-cold">
              Cold
            </label>
        </label>
      </div>
    </ModalWithForm>
  );

  function submitHandler() {
    const name = document.getElementById("name-input").value;
    const link = document.getElementById("link-input").value;
    const weatherNodes = document.getElementsByName("weather");
    const weatherArray = [].slice.call(weatherNodes, 0);
    const weather = weatherArray.filter((el) => el.checked)[0].value;
    props.addItem(name, link, weather);
    props.closeHandler(props.modalId);
    document.forms[0].reset();
  }
}

export default NewItemModal;
