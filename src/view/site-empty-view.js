import AbstractView from './abstract-view.js';

const createSiteEmptyTemplate = (text)=>(
  `<p class="trip-events__msg">${text}</p>`
);

export default class SiteEmptyView extends AbstractView{
    #text=null;

    constructor(text){
      super();
      this.#text=text;
    }

    get template(){
      return createSiteEmptyTemplate(this.#text);
    }
}
