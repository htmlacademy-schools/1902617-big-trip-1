import siteMenuView from './view/site-menu-view.js';
import { renderElement, RenderPosition } from './render.js';
import siteFilterView from './view/site-filter-view.js';
import siteSortView from './view/site-sort-view.js';
import siteEventsView from './view/site-events-view.js';
import siteFormCreateView from './view/site-form-create-view.js';
import siteFormEditView from './view/site-form-edit-view.js';
import siteWaypointView from './view/site-waypoint-view.js';
import siteInfoView from './view/site-info-view.js';
import siteEmptyView from './view/site-empty-view.js';
import { getPoint } from './mockData/Waypoint.js';

const waypointsNum = 17;
const waypoints = Array.from({ length: waypointsNum }, getPoint()).sort((x, y) => x.dateFrom - y.dateFrom);

const siteMainElement = document.querySelector('.trip-main');
const siteMenuElement = siteMainElement.querySelector('.trip-controls__navigation');
const siteFilterElement = siteMainElement.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');

renderElement(siteMainElement, new siteInfoView(waypoints).element, RenderPosition.AFTERBEGIN);
renderElement(siteMenuElement, new siteMenuView().element, RenderPosition.BEFOREEND);
renderElement(siteFilterElement, new siteFilterView().element, RenderPosition.BEFOREEND);
if (waypoints?.length > 0){
  renderElement(siteEventsElement, new siteSortView().element, RenderPosition.BEFOREEND);
  renderElement(siteEventsElement, new siteEventsView().element, RenderPosition.BEFOREEND);
}
else{
  const text='Click New Event to create your first point';
  renderElement(siteEventsElement, new siteEmptyView(text).element, RenderPosition.BEFOREEND);
}

const siteEventElement = siteEventsElement.querySelector('.trip-events__list');
if (waypoints?.length>0){
  renderElement(siteEventElement, new siteFormCreateView(waypoints[0]).element, RenderPosition.BEFOREEND);
}


for (let k = 0; k < waypoints?.length; k++) {
  const formEdit=new siteFormEditView(waypoints[k]);
  const wayPoint=new siteWaypointView(waypoints[k]);

  const onEscKeyDown=(evnt)=>{
    if (evnt.key==='Esc'||evnt.key==='Escape'){
      evnt.preventDefault();
      siteEventElement.replaceChild(wayPoint.element, formEdit.element);
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  wayPoint.element.querySelector('.event__rollup-btn').addEventListener('click', ()=>{
    siteEventElement.replaceChild(formEdit.element, wayPoint.element);
    document.addEventListener('keydown', onEscKeyDown);
  });

  formEdit.element.querySelector('form').addEventListener('submit', (x)=>{
    x.preventDefault();
    siteEventElement.replaceChild(wayPoint.element, formEdit.element);
    document.addEventListener('keydown', onEscKeyDown);
  });

  formEdit.element.querySelector('.event__rollup-btn').addEventListener(
    'click', ()=>{
      siteEventElement.replaceChild(wayPoint.element, formEdit.element);
      document.removeEventListener('keydown', onEscKeyDown);
    }
  );

  renderElement(siteEventElement, wayPoint.element, RenderPosition.BEFOREEND);
}
