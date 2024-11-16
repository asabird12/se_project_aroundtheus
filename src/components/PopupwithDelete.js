import Popup from "./Popup";

export default class PopupwithDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal_form");
  }

  setDeleteCard(handleDeleteCard) {
    this._handleFormSubmit = handleDeleteCard;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }
}
