import dayjs from 'dayjs';

export const createInfoTemplate = (waypoints) => {
  const pointDate = waypoints[0].date_from;
  const pointDateEnd = waypoints[waypoints.length-1].date_to;
  let totalPrice = 0;
  let totalRoute = '';
  let lastCity='';
  for (const waypoint of waypoints){
    totalPrice+=waypoint.base_price;
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
