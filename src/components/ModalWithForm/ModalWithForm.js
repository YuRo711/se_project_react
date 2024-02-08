function ModalWithForm(props) {
    return (
      <div className="ModalWithForm">
        <button type="button" className="ModalWithForm__close-button"></button>
        <div className="ModalWithForm__title">New garment</div>
        <form className="ModalWithForm__form">
            <label className="ModalWithForm__label">Name</label>
            <input type="text"
                className="ModalWithForm__input"
                placeholder="Name"
                id="name-input"
                minlength="2"
                maxlength="200"
                required
            />

<           label className="ModalWithForm__label">Name</label>
            <input type="url"
                className="ModalWithForm__input"
                placeholder="Name"
                id="link-input"
                minlength="2"
                maxlength="200"
                required
            />

            <input type="radio"
                className="ModalWithForm__radio"
                id="hot"
                name="weather"
                required/>
            <label for="weather">Hot</label>
            <input type="radio"
                className="ModalWithForm__radio"
                id="warm"
                name="weather"
                required/>
            <label for="weather">Warm</label>
            <input type="radio"
                className="ModalWithForm__radio"
                id="cold"
                name="weather"
                required/>
            <label for="weather">Cold</label>

            <button type="submit" className="ModalWithForm__submit-button">
                Add garment
            </button>
        </form>
      </div>
    );
  }
  
  export default ModalWithForm;
  