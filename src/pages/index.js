import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import * as constants from "../utils/constants.js";
import Api from "../components/Api.js";
import PopupwithDelete from "../components/PopupWithDelete.js";

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "4e1a4a29-a169-4707-98f4-1db0defa237e",
    "Content-Type": "application/json",
  },
});

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
  const card = new Card(
    data,
    "#card-template",
    handleImageClick,
    handleDeleteCard
  );
  return card.getCard();
}

const editFormValidator = new FormValidator(
  constants.validationSettings,
  constants.profileFormElement
);
const cardFormValidator = new FormValidator(
  constants.validationSettings,
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
  cardFormValidator.disableButton();
}

//function handleFormSubmit(formValues) {}

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

function handleDeleteCard(card, cardId) {
  deletePopup.open(card, cardId);
  deletePopup.setDeleteCard(() => {
    api
      .deleteCard({ cardId })
      .then(() => {
        card.close();
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

const deletePopup = new PopupwithDelete("#delete-modal", handleDeleteCard);
deletePopup.setEventListeners();
