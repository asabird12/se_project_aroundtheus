import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import * as constants from "../utils/constants.js";

function handleImageClick(data) {
  //openModal(previewModal);
  // previewImage.src = data.link;
  // previewImage.alt = data.name;
  // previewTitle.textContent = data.name;
  popupImage.open(data);
}

function createCard(data) {
  const cardElement = getCardElement(data);
  cardCreator.addItem(cardElement);
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
    renderer: createCard,
  },
  ".cards__list"
);

cardCreator.renderItems();

const userProfileInfo = new UserInfo({
  profileName: ".profile__title",
  profileJob: ".profile__subtitle",
});

function handleProfileSubmit(formValues) {
  const profileName = formValues.title;
  const profileJob = formValues.subtitle;
  userProfileInfo.setUserInfo({ profileName, profileJob });
  profilePopup.close();
}

function handleAddCardSubmit(formValues) {
  const name = formValues.title;
  const link = formValues.url;
  const data = { name, link };

  createCard(data);
  cardPopup.close();
}
const profilePopup = new PopupWithForm("#edit-modal", handleProfileSubmit);
profilePopup.setEventListeners();

const cardPopup = new PopupWithForm("#add-modal", handleAddCardSubmit);
cardPopup.setEventListeners();

const popupImage = new PopupWithImage({ popupSelector: "#preview-modal" });
popupImage.setEventListeners();

constants.cardAddButton.addEventListener("click", () => {
  cardPopup.open();
});
constants.profileEditButton.addEventListener("click", () => {
  const formValues = userProfileInfo.getUserInfo();
  constants.profileTitleInput.value = formValues.profileName;
  constants.profileSubtitleInput.value = formValues.profileJob;
  profilePopup.open();
});
