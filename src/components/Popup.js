export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    //opens popup
    openModal(this._popupElement);
  }

  close() {
    //closes popup
    closeModal(this._popupElement);
  }

  _handleEscClose(evt) {
    evt.preventDefault();
    //listens for esc button
    closeModalEsc(this._popupElement);
  }

  setEventListeners() {
    //event listeners
    this._popupElement.addEventListeners("click", (evt) => {
      this._handleEscClose(this._popupElement);
    });
  }
}
