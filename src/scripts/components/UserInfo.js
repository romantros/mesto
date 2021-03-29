export default class UserInfo {
  constructor({ name, hobby }) {
    this._name = document.querySelector(name);
    this._hobby = document.querySelector(hobby);
  }
  getUserInfo() {
    return {
      name: this._name.textContent,
      hobby: this._hobby.textContent,
    };
  }
  setUserInfo({ name, hobby }) {
    this._name.textContent = name;
    this._hobby.textContent = hobby;
  }
}
