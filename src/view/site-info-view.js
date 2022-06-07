import dayjs from 'dayjs';
import AbstractView from './abstract-view.js';
import { sortWayPointsByDay } from '../tools.js';

const createInfoTemplate = (waypoints) => {
  waypoints.sort(sortWayPointsByDay);

  const pointDate = new Date(waypoints[0].dateFrom);
  const pointDateEnd = new Date(waypoints[waypoints.length-1].dateTo);
  let dates ='';
  if (pointDate.getMonth() === pointDateEnd.getMonth()){
    dates = `${dayjs(pointDate, 'MMM D')}&nbsp;&mdash;&nbsp;${dayjs(pointDateEnd, 'D')}`;
  }
  else{
    dates = `${dayjs(pointDate, 'D MMM')}&nbsp;&mdash;&nbsp;${dayjs(pointDateEnd, 'D MMM')}`;
  }

  let totalPrice = 0;
  let totalRoute = [];
  let lastCity='';
  for (const waypoint of waypoints){
    totalPrice+=waypoint.basePrice;
    const offersOfType = waypoint.offers.filter((x) => x.type === waypoint.type);
    if (offersOfType.length > 0){
      offersOfType[0].offers.forEach((offer) => {
        if (offer.isChosen){
          totalPrice+=offer.price;
        }
      });
    }
    if (waypoint.destination.name !== lastCity){
      lastCity = waypoint.destination.name;
      totalRoute.push(lastCity);
    }
  }

  if (totalRoute.length > 3){
    totalRoute = `${totalRoute[0]} &mdash; ... &mdash; ${totalRoute[totalRoute.length - 1]}`;
  }
  else{
    totalRoute = totalRoute.join(' &mdash; ');
  }

  return `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${totalRoute}</h1>
        <p class="trip-info__dates">${dates}</p>
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
    return '';
  }
}
