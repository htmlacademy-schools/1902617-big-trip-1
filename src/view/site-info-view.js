import dayjs from 'dayjs';
import { createElement } from '../render';

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

export default class siteInfoView{
  #element=null

  constructor(waypoints){
    this.waypoints=waypoints;
  }

  get element(){
    if (!(this.#element)){
      this.#element=createElement(this.infoTemplate);
    }
    return this.#element;
  }

  get infoTemplate(){
    if (this.waypoints?.length>0){
      return createInfoTemplate(this.waypoints);
    }
    return ' ';
  }

  removeElement(){
    this.#element=null;
  }
}
