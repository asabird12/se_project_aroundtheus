export default class UserInfo {
  constructor({ profileName, profileJob, profileAvatar, isLiked }) {
    this._profileName = document.querySelector(profileName);
    this._profileJob = document.querySelector(profileJob);
    this._profileAvatar = document.querySelector(profileAvatar);
    this._isLiked = document.querySelector(isLiked);
  }

  getUserInfo() {
    //returns user information
    return {
      profileName: this._profileName.textContent,
      profileJob: this._profileJob.textContent,
      profileAvatar: this._profileAvatar.src,
    };
  }

  setUserInfo({ profileName, profileJob, profileAvatar, isLiked }) {
    this._profileName.textContent = profileName;
    this._profileJob.textContent = profileJob;
    this._profileAvatar.src = profileAvatar;
    this._isLiked = isLiked;

    //takes new user data and adds it to the page
    //method should be used after successful submission of the profile form
  }

  setUserAvatar(avatar) {
    this._profileAvatar.src = avatar.profileAvatar;
  }

  setLikeStatus(isLiked) {
    this._isLiked = isLiked.isLiked;
  }
}
