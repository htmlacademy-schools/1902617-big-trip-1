import { createElement } from '../render';

const createSiteMenuTemplate = () => (
  ` <nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
  </nav>`
);

export default class siteMenuView{
  #element=null

  get element(){
    if (!(this.#element)){
      this.#element=createElement(this.menuTemplate);
    }
    return this.#element;
  }

  get menuTemplate(){
    return createSiteMenuTemplate();
  }

  removeElement(){
    this.#element=null;
  }
}
