import AbstractView from './abstract-view.js';

export default class SmartView extends AbstractView {
  _waypoint = {};

  restoreHandlers = () => {
    throw new Error('Abstract method not implemented: restoreHandlers');
  }

  updateElement = () => {
    const lastElement = this.element;
    const parent = lastElement.parentElement;
    this.removeElement();

    const newElement = this.element;
    parent.replaceChild(newElement, lastElement);

    this.restoreHandlers();
  }

  updateData = (update, justDataUpdating) => {
    if (!update) {
      return;
    }

    this._waypoint = { ...this._waypoint, ...update };

    if (justDataUpdating) {
      return;
    }

    this.updateElement();
  }
}