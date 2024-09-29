export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popupCloseButton = this._popupElement.querySelector(
      ".modal__close-button"
    );
  }

  open() {
    //opens popup
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    //closes popup
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
    //listens for esc button
  }

  setEventListeners() {
    //event listeners
    this._popupElement.addEventListeners("click", (evt) => {
      if (
        evt.target.classList.contains("modal") ||
        evt.target.classList.contains("modal__button-close")
      ) {
        this.close();
      }
    });
  }
}
