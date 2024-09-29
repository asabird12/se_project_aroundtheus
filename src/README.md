# Project 3: Around The U.S.

### Overview

- Intro
- Technologies and Techniques used
- Images

**Intro**

This is a project that is a responsive design website about the explorer Jacques-Cousteau and the places he has been to in the U.S. The website is designed for all major devices like laptops, tablets, and mobile devices. It is designed to apealling and attractive at all resolutions.

**Technologies and Techniques used**
In this project, I used the program Figma. This program gave me the templete and all the details I needed to complete this assignment by making a exact replicia of the templete. I achieved that by writing all the nessacary coded needed to achieve the replicia.

Some techniques used were grid and flex display styles. Using both gird and flex displays allowed me to maintain the layouts needed at certain resolutions.

**Images**

**Github Link**
https://asabird12.github.io/se_project_aroundtheus/

**Video**
https://drive.google.com/file/d/1GRUSbs2QIOvMEHkD8yDAIqHN9n47KUSK/view?usp=sharing

const nameInput = profileEditModal.querySelector("#profile-title-input");
const jobInput = profileEditModal.querySelector("#profile-subtitle-input");
const profileName = profileEditModal.querySelector(".profile**title");
const profileJob = profileEditModal.querySelector(".profile**subtitle");
const profileSave = profileEditModal.querySelector(".modal\_\_button");
const cardTemplate = document
.querySelector("#card-template")
.content.querySelector(".card");
const previewImage = document.querySelector(".modal**image");
const previewTitle = document.querySelector(".modal**title");
const cardTitleInput = cardAddModal.querySelector("#card-title-input");
const cardImageInput = cardAddModal.querySelector("#card-image-link-input");
profileEditButton.addEventListener("click", () => {
profileTitleInput.value = profileTitle.textContent;
profileSubtitleInput.value = profileSubtitle.textContent;
openModal(profileEditModal);
});

profileModalButton.addEventListener("click", () => {
closeModal(profileEditModal);
});

profileFormElement.addEventListener("submit", (evt) => {
evt.preventDefault();
profileTitle.textContent = profileTitleInput.value;
profileSubtitle.textContent = profileSubtitleInput.value;
closeModal(profileEditModal);
});

allModals.forEach((modal) => {
modal.addEventListener("click", (evt) => {
if (evt.target.classList.contains("modal_opened")) {
closeModal(modal);
}
});
});

const allModals = document.querySelectorAll(".modal");
