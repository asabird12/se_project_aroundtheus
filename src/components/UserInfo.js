export default class UserInfo {
  constructor({ profileName, profileJob, profileAvatar }) {
    this._profileName = document.querySelector(profileName);
    this._profileJob = document.querySelector(profileJob);
    this._profileAvatar = document.querySelector(profileAvatar);
  }

  getUserInfo() {
    //returns user information
    return {
      profileName: this._profileName.textContent,
      profileJob: this._profileJob.textContent,
    };
  }

  setUserInfo({ profileName, profileJob, profileAvatar }) {
    this._profileName.textContent = profileName;
    this._profileJob.textContent = profileJob;
    this._profileAvatar.src = profileAvatar;

    //takes new user data and adds it to the page
    //method should be used after successful submission of the profile form
  }
}
