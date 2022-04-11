import { createElement } from '../render';

const createSiteEventsTemplate = () => (
  `<ul class="trip-events__list">
    </ul>`
);

export default class siteEventsView{
  #element=null

  get element(){
    if (!(this.#element)){
      this.#element=createElement(this.EventsTemplate);
    }
    return this.#element;
  }

  get EventsTemplate(){
    return createSiteEventsTemplate();
  }

  removeElement(){
    this.#element=null;
  }
}
