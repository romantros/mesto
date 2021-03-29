import Popup from './Popup.js';
import { picPopup, titlePopup } from '../utils/constants.js';
export default class PopupWithImage extends Popup {
    constructor(name, link, popupSelector) {
        super(popupSelector);
        this._name = name;
        this._link = link;
    }
    open() {
        picPopup.src = this._link;
        picPopup.alt = this._name;
        titlePopup.textContent = this._name;
        super.open();
    }
}