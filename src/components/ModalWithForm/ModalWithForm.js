import Modal from "../Modal/Modal";

function ModalWithForm(props) {
  return (
    <div className="ModalWithForm">
      <Modal
          isVisible={props.isVisible}
          setVisibility={props.setVisibility}
      >
        <div className="ModalWithForm__container">
          <button type="button"
            className="Modal__close-button Modal__close-button_gray"
            onClick={() => {
              props.setVisibility(false);
            }}
          ></button>
          <div className="ModalWithForm__title">New garment</div>

          <form className="ModalWithForm__form">
              <label className="ModalWithForm__label">Name</label>
              <input type="text"
                className="ModalWithForm__input"
                placeholder="Name"
                id="name-input"
                required
              /><br/>

              <label className="ModalWithForm__label">Image</label>
              <input type="url"
                className="ModalWithForm__input"
                placeholder="Image URL"
                id="link-input"
                required
              /><br/>

              <label className="ModalWithForm__label ModalWithForm__label_radio">
                Select the weather type:
              </label><br/>
              <div className="ModalWithForm__radio-buttons">
                <label for="weather" className="ModalWithForm__radio">
                  <input type="radio"
                    className="ModalWithForm__radio-button"
                    value="hot"
                    name="weather"/>
                  <span className="ModalWithForm__radio-label">Hot</span>
                </label><br/>

                <label for="weather" className="ModalWithForm__radio">
                  <input type="radio"
                    className="ModalWithForm__radio-button"
                    value="warm"
                    name="weather"/>
                  <span className="ModalWithForm__radio-label">Warm</span>
                </label><br/>

                <label for="weather" className="ModalWithForm__radio">
                  <input type="radio"
                    className="ModalWithForm__radio-button"
                    value="cold"
                    name="weather"/>
                  <span className="ModalWithForm__radio-label">Cold</span>
                </label><br/>
              </div>

              <button type="submit"
                className="ModalWithForm__submit-button"
                onClick={(event) => {
                  event.preventDefault();
                  submitHandler();
                }}
              >
                Add garment
              </button>
            </form>
          </div>
      </Modal>
    </div>
  );

  function submitHandler() {
    const name = document.getElementById("name-input").value;
    const link = document.getElementById("link-input").value;
    const weatherNodes = document.getElementsByName("weather");
    const weatherArray = [].slice.call(weatherNodes, 0);
    const weather = weatherArray.filter((el) => el.checked)[0].value;
    props.addItem(name, link, weather);
    props.setVisibility(false);
    document.forms[0].reset();
  }
}

export default ModalWithForm;
