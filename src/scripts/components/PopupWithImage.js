import Popup from "./Popup.js";
import { picPopup, titlePopup } from "../utils/constants.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(name, link) {
    picPopup.src = link;
    picPopup.alt = name;
    titlePopup.textContent = name;
    super.open();
  }
}
