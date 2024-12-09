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

const cardCreator = new Section(
  {
    items: constants.initialCards,
    renderer: createCard,
  },
  ".cards__list"
);

cardCreator.renderItems();

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "4e1a4a29-a169-4707-98f4-1db0defa237e",
    "Content-Type": "application/json",
  },
});

api
  .getInitialCards()
  .then((data) => {
    cardCreator.renderItems(data);
  })
  .catch((err) => console.log(err));

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

const avatarFormValidator = new FormValidator(
  constants.validationSettings,
  constants.avatarFormElement
);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

const userProfileInfo = new UserInfo({
  profileName: ".profile__title",
  profileJob: ".profile__subtitle",
  profileAvatar: ".profile__image",
});

api
  .getUserInfo()
  .then((data) => {
    userProfileInfo.setUserInfo({
      profileName: data.name,
      profileJob: data.about,
      profileAvatar: data.avatar,
    });
  })
  .catch((err) => console.error(err));

function handleProfileSubmit(formValues) {
  profilePopup.loadingState(true);

  api
    .updateUserInfo({ name: formValues.title, about: formValues.subtitle })
    .then((updatedData) => {
      userProfileInfo.setUserInfo({
        profileName: updatedData.name,
        profileJob: updatedData.about,
      });
      profilePopup.close();
    })
    .catch((err) => console.error(err))
    .finally(() => {
      profilePopup.loadingState(false);
    });
}

function handleAddCardSubmit(formValues) {
  cardPopup.loadingState(true);

  const { title, url } = formValues;
  api
    .addNewCard({ name: title, link: url })
    .then((newCard) => {
      cardCreator.addItem(getCardElement(newCard));
      cardPopup.close();
      cardFormValidator.disableButton();
    })
    .catch((err) => console.error(err))
    .finally(() => {
      cardPopup.loadingState(false);
    });
}

function handleAvatarEdit(formValues) {
  changeProfilePopup.loadingState(true);

  api
    .avatarEdit(formValues.avatar)
    .then((data) => {
      userProfileInfo.updateUserAvatar(data.avatar);
      changeProfilePopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      changeProfilePopup.loadingState(false);
    });
}

const changeProfilePopup = new PopupWithForm("#avatar-edit", handleAvatarEdit);
changeProfilePopup.setEventListeners();
constants.profileImageIcon.addEventListener("click", () =>
  changeProfilePopup.open()
);

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
      .deleteCard({ card, cardId })
      .then(() => {
        card.remove();
        deletePopup.close();
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

const deletePopup = new PopupwithDelete("#delete-modal", handleDeleteCard);
deletePopup.setEventListeners();
