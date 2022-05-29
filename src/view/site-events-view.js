import AbstractView from './abstract-view.js';

const createSiteEventsTemplate = () => (
  `<ul class="trip-events__list">
    </ul>`
);

export default class SiteEventsView extends AbstractView{
  get template(){
    return createSiteEventsTemplate();
  }
}
