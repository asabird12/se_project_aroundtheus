import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import * as constants from "../utils/constants.js";

constants.initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  constants.cardList.append(cardElement);
});

function handleImageClick(data) {
  //openModal(previewModal);
  // previewImage.src = data.link;
  // previewImage.alt = data.name;
  // previewTitle.textContent = data.name;
  popupImage.open(data);
}

function getCardElement(data) {
  const card = new Card(data, "#card-template", handleImageClick);
  return card.getCard();
}

const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(
  validationSettings,
  constants.profileFormElement
);
const cardFormValidator = new FormValidator(
  validationSettings,
  constants.cardFormElement
);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

const cardCreator = new Section(
  {
    items: constants.initialCards,
    renderer: (item) => {
      const cardElement = getCardElement(item);
      cardCreator.addItem(cardElement);
    },
  },
  constants.cardList
);

cardCreator.renderItems();

const userProfileInfo = new UserInfo({
  profileName: ".profile__title",
  profileJob: ".profile__subtitle",
});

const profilePopup = new PopupWithForm("#edit-modal", (data) => {
  userProfileInfo.setUserInfo(data);
  profilePopup.open();
  profilePopup.close();
});
profilePopup.setEventListeners();

const cardPopup = new PopupWithForm("#add-modal", (data) => {
  cardCreator.addItem(getCardElement(data));
  cardPopup.open();
  cardPopup.close();
});
cardPopup.setEventListeners();

const popupImage = new PopupWithImage({ popupSelector: "#preview-modal" });
popupImage.setEventListeners();

function handleOpenCardPopup() {
  cardPopup.open();
}

function handleOpenProfilePopup() {
  profilePopup.open();
}

constants.cardAddButton.addEventListener("click", handleOpenCardPopup);
constants.profileEditButton.addEventListener("click", handleOpenProfilePopup);
