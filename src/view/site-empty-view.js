import { createElement } from '../render';

const createSiteEmptyTemplate = (text)=>(
  `<p class="trip-events__msg">${text}</p>`
);

export default class siteEmptyView{
    #element=null

    get element(){
      if (!(this.#element)){
        this.#element=createElement(this.EmptyTemplate);
      }
      return this.#element;
    }

    get EmptyTemplate(){
      return createSiteEmptyTemplate();
    }

    removeElement(){
      this.#element=null;
    }
}
