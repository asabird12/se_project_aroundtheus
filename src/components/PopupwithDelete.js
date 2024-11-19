import Popup from "./Popup";

export default class PopupwithDelete extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
  }

  setDeleteCard(handleDeleteCard) {
    this._handleFormSubmit = handleDeleteCard;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupform.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }
}
