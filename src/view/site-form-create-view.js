import dayjs from 'dayjs';
import SmartView from './smart-view.js';

const createSiteFormOffersTemplate = (someOffers, someType)=>{
  if (someOffers.length === 0){
    return '';
  }

  someOffers=someOffers.map((offer) => `<div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${someType}-${offer.id}" type="checkbox" name="event-offer-${someType}" checked="checked">
  <label class="event__offer-label" for="event-offer-${someType}-${offer.id}">
    <span class="event__offer-title">${offer.title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${offer.price}</span>
  </label>
</div>`).join('\n');

  return `<section class="event__section  event__section--offers">
  <h3 class="event__section-title  event__section-title--offers">Offers</h3>
  <div class="event__available-offers">
  ${someOffers}
  </div>
</section>`;
};

const createSiteFormDescription = (description='', pictures=[]) => {
  if ((description.length===0) && (pictures.length===0)){
    return '';
  }
  let finalPictures='';
  if (pictures.length !== 0){
    const pictureTemporary = pictures
      .map((pic) => `<img class="event__photo" src="${pic.src}" alt="${pic.description}">`)
      .join('\n');
    finalPictures = `<div class="event__photos-container">
        <div class="event__photos-tape">
          ${pictureTemporary}
        </div>
      </div>` ;
  }
  return `<section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${description}</p>
    ${finalPictures}
  </section>`;
};

const createSiteFormCreateTemplate = (waypoint) => {
  const pointDate = waypoint.dateFrom;
  const pointDateEnd = waypoint.dateTo;
  const pointType = waypoint.type;
  const pointCity = waypoint.destination.name;
  const pointPrice = waypoint.basePrice;
  const pointOffers = waypoint.offers.offers;
  const pointOffersType = waypoint.offers.type;
  const pointDescription = waypoint.destination.description;
  const pointPictures = waypoint.destination.pictures;
  const pointId=waypoint.id;
  return `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${pointType}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                <div class="event__type-item">
                  <input id="event-type-taxi-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi" ${pointType === 'taxi' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-${pointId}">Taxi</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-bus-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus" ${pointType === 'bus' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--bus" for="event-type-bus-${pointId}">Bus</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-train-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train" ${pointType === 'train' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--train" for="event-type-train-${pointId}">Train</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-ship-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship" ${pointType === 'ship' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--ship" for="event-type-ship-${pointId}">Ship</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-drive-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive" ${pointType === 'drive' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--drive" for="event-type-drive-${pointId}">Drive</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-flight-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" ${pointType === 'flight' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--flight" for="event-type-flight-${pointId}">Flight</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-check-in-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in" ${pointType === 'check-in' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-${pointId}">Check-in</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-sightseeing-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing" ${pointType === 'sightseeing' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-${pointId}">Sightseeing</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-restaurant-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant" ${pointType === 'restaurant' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-${pointId}">Restaurant</label>
                </div>
              </fieldset>
            </div>
          </div>
          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-${pointId}">
            ${pointType}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-${pointId}" type="text" name="event-destination" value="${pointCity}" list="destination-list-${pointId}">
            <datalist id="destination-list-${pointId}">
              <option value="Amsterdam"></option>
              <option value="Geneva"></option>
              <option value="Chamonix"></option>
            </datalist>
          </div>
          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-${pointId}">From</label>
            <input class="event__input  event__input--time" id="event-start-time-${pointId}" type="text" name="event-start-time" value="${dayjs(pointDate, 'YY/MM/DD HH:mm')}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-${pointId}">To</label>
            <input class="event__input  event__input--time" id="event-end-time-${pointId}" type="text" name="event-end-time" value="${dayjs(pointDateEnd, 'YY/MM/DD HH:mm')}">
          </div>
          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-${pointId}">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-${pointId}" type="text" name="event-price" value="${pointPrice}">
          </div>
          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
        </header>
        <section class="event__details">

        ${createSiteFormOffersTemplate(pointOffers, pointOffersType)}

        ${createSiteFormDescription(pointDescription, pointPictures)}

        </section>
      </form>
    </li>`;
};

export default class SiteFormCreateView extends SmartView{
  constructor(waypoint){
    super();
    this._waypoint=waypoint;
  }

  get template(){
    return createSiteFormEditTemplate(this._waypoint);
  }

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#clickHandler);
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  }

  setFormSubmitHandler = (callback) => {
    this._callback.formSubmit = callback;
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this._callback.formSubmit(this._waypoint);
  }

  setChangesHandler = (callback) => {
    this.element.querySelector('.event__type-list').addEventListener('input', this.#changeTypeHandler);
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#changeCityHandler);

    const offers = this.element.querySelector('.event__available-offers');
    if (offers){ 
      offers.addEventListener('input', this.#changeOffersHandler);
    }
  }

  #changeTypeHandler = (evt) => {
    evt.preventDefault();
    this.updateData({ type: evt.target.value });
  }

  #changeCityHandler = (evt) => {
    evt.preventDefault();
    this.updateData({ destination: { ...this._waypoint.destination, ...{ name: evt.target.value } } });
  }

  #changeOffersHandler = (evt) =>{
    evt.preventDefault();
    const almostNum = evt.target.id.split('-');
    const num = +almostNum[almostNum.length - 1] - 1;
    const offers = JSON.parse(JSON.stringify(this._waypoint.offers));

    for (const typeAndOffer of offers){
      if (typeAndOffer.type !== this._waypoint.type){
        continue;
      }

      const offer = typeAndOffer.offers[num];
      offer.isChosen = !offer.isChosen;
      break;
    }

    this.updateData({ offers });
  }

  reset = (waypoint) => {
    this.updateData(waypoint);
  }
}
