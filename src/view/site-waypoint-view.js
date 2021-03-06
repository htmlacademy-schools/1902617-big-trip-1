import dayjs from 'dayjs';
import { getInterval } from '../tools';
import AbstractView from './abstract-view.js';

const createSiteOffersTemplate = (someOffers, someType)=>{

  const offersOfType = someOffers.filter((x) => x.type === someType);

  if (offersOfType.length > 0){
    let finalOffers=offersOfType[0].offers.filter((offer) => offer.isChosen);

    if (finalOffers.length === 0){
      return '';
    }

    finalOffers=finalOffers.map((offer) => `<li class="event__offer">
    <span class="event__offer-title">${offer.title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${offer.price}</span>
    </li>`).join('\n');

    return `<h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
    ${finalOffers}
    </ul>`;
  }

  return '';
};

const createSiteWayPointTemplate = (waypoint) => {
  const pointDate = new Date(waypoint.dateFrom);
  const pointDateEnd = new Date(waypoint.dateTo);
  const pointType = waypoint.type;
  const pointCity = waypoint.destination.name;
  const pointPrice = waypoint.basePrice;
  const pointOffers = waypoint.offers;
  return `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${dayjs(pointDate).format('YYYY-MM-DD')}">${dayjs(pointDate).format('MMM D')}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${pointType}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${pointType} ${pointCity}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dayjs(pointDate).format('YYYY-MM-DDTHH:mm')}">${dayjs(pointDate).format('HH:mm')}</time>
            &mdash;
            <time class="event__end-time" datetime="${dayjs(pointDateEnd).format('YYYY-MM-DDTHH:mm')}">${dayjs(pointDateEnd).format('HH:mm')}</time>
          </p>
          <p class="event__duration">${getInterval(dayjs(pointDate).diff(pointDateEnd, 'm'))}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${pointPrice}</span>
        </p>
        ${createSiteOffersTemplate(pointOffers, pointType)}
        <button class="event__favorite-btn ${waypoint.isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`;
};

export default class SiteWayPointView extends AbstractView{
  #waypoint=null;

  constructor(waypoint){
    super();
    this.#waypoint=waypoint;
  }

  get template(){
    return createSiteWayPointTemplate(this.#waypoint);
  }

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#clickHandler);
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  }

  setFavoriteHandler = (callback) =>{
    this._callback.favoriteClick = callback;
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteHandler);
  }

  #favoriteHandler = (evt) => {
    evt.preventDefault();
    this._callback.favoriteClick();
  }
}
