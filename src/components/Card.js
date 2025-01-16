export default class Card {
  constructor(
    cardData,
    cardSelector,
    handleImageClick,
    handleDeleteCard,
    handleLikeButton,
    userId
  ) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._id = cardData._id;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeButton = handleLikeButton;
    this._userId = userId;
    this._isLiked = cardData.isLiked;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton(this._id, this._isLiked);
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard(this, this._id);
    });

    this._cardImageElement.addEventListener("click", () => {
      this._handleImageClick({ name: this._name, link: this._link });
    });
  }

  getCard() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    this._cardImageElement = this._cardElement.querySelector(".card__image");
    this._cardElement.querySelector(".card__title").textContent = this._name;
    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = this._name;
    this._setEventListeners();

    return this._cardElement;
  }

  updateLike() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  isLiked() {
    return this._isLiked;
  }

  getId() {
    return this._id;
  }

  handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
}
