import dayjs from 'dayjs';
import AbstractView from './abstract-view.js';

const createInfoTemplate = (waypoints) => {
  const pointDate = waypoints[0].dateFrom;
  const pointDateEnd = waypoints[waypoints.length-1].dateTo;
  let totalPrice = 0;
  let totalRoute = '';
  let lastCity='';
  for (const waypoint of waypoints){
    totalPrice+=waypoint.basePrice;
    waypoint.offers.offers.forEach((offer) => {
      totalPrice+=offer.price;
    });
    if (waypoint.destination.name !== lastCity){
      lastCity = waypoint.destination.name;
      totalRoute=[totalRoute, lastCity].join(' &mdash; ');
    }
  }

  return `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${totalRoute}</h1>
        <p class="trip-info__dates">${dayjs(pointDate, 'MMM D')}&nbsp;&mdash;&nbsp;${dayjs(pointDateEnd, 'D')}</p>
      </div>
      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
      </p>
    </section>`;
};

export default class SiteInfoView extends AbstractView{
  #waypoints=null;

  constructor(waypoints){
    super();
    this.#waypoints=waypoints;
  }

  get template(){
    if (this.#waypoints?.length>0){
      return createInfoTemplate(this.#waypoints);
    }
    return ' ';
  }
}
