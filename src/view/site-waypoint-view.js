import dayjs from 'dayjs';
import { getInterval } from '../tools';
import { createElement } from '../render';

const createSiteOffersTemplate = (someOffers)=>{
  if (someOffers.length === 0){
    return '';
  }

  someOffers=someOffers.map((offer) => `<li class="event__offer">
  <span class="event__offer-title">${offer.title}</span>
  &plus;&euro;&nbsp;
  <span class="event__offer-price">${offer.price}</span>
  </li>`).join('\n');

  return `<h4 class="visually-hidden">Offers:</h4>
  <ul class="event__selected-offers">
  ${someOffers}
  </ul>`;
};

const createSiteWayPointTemplate = (waypoint) => {
  const pointDate = waypoint.dateFrom;
  const pointDateEnd = waypoint.dateTo;
  const pointType = waypoint.type;
  const pointCity = waypoint.destination.name;
  const pointPrice = waypoint.basePrice;
  const pointOffers = waypoint.offers.offers;
  return `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${dayjs(pointDate, 'YYYY-MM-DD')}">${dayjs(pointDate, 'MMM D')}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${pointType}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${pointType} ${pointCity}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dayjs(pointDate, 'YYYY-MM-DDTHH:mm')}">${dayjs(pointDate, 'HH:mm')}</time>
            &mdash;
            <time class="event__end-time" datetime="${dayjs(pointDateEnd, 'YYYY-MM-DDTHH:mm')}">${dayjs(pointDateEnd, 'HH:mm')}</time>
          </p>
          <p class="event__duration">${getInterval(dayjs(pointDate).diff(pointDateEnd, 'm'))}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${pointPrice}</span>
        </p>
        ${createSiteOffersTemplate(pointOffers)}
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

export default class siteWayPoint{
  #element=null

  constructor(waypoint){
    this.waypoint=waypoint;
  }

  get element(){
    if (!(this.#element)){
      this.#element=createElement(this.waypointTemplate);
    }
    return this.#element;
  }

  get waypointTemplate(){
    return createSiteWayPointTemplate(this.waypoint);
  }

  removeElement(){
    this.#element=null;
  }
}
