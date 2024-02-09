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
                    id="hot"
                    name="weather"
                    required/>
                  <span className="ModalWithForm__radio-label">Hot</span>
                </label><br/>

                <label for="weather" className="ModalWithForm__radio">
                  <input type="radio"
                    className="ModalWithForm__radio-button"
                    id="warm"
                    name="weather"
                    required/>
                  <span className="ModalWithForm__radio-label">Warm</span>
                </label><br/>

                <label for="weather" className="ModalWithForm__radio">
                  <input type="radio"
                    className="ModalWithForm__radio-button"
                    id="cold"
                    name="weather"
                    required/>
                  <span className="ModalWithForm__radio-label">Cold</span>
                </label><br/>
              </div>

              <button type="submit" className="ModalWithForm__submit-button">
                Add garment
              </button>
            </form>
          </div>
      </Modal>
    </div>
  );
}

export default ModalWithForm;
