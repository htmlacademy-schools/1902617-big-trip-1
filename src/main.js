import SiteMenuView from './view/site-menu-view.js';
import { render, RenderPosition } from './render.js';
import SiteFilterView from './view/site-filter-view.js';
import SiteSortView from './view/site-sort-view.js';
import SiteEventsView from './view/site-events-view.js';
import SiteFormCreateView from './view/site-form-create-view.js';
import SiteFormEditView from './view/site-form-edit-view.js';
import SiteWaypointView from './view/site-waypoint-view.js';
import SiteInfoView from './view/site-info-view.js';
import SiteEmptyView from './view/site-empty-view.js';
import { getPoint } from './mockData/Waypoint.js';

const waypointsNum = 17;
const waypoints = Array.from({ length: waypointsNum }, getPoint()).sort((x, y) => x.dateFrom - y.dateFrom);

const siteMainElement = document.querySelector('.trip-main');
const siteMenuElement = siteMainElement.querySelector('.trip-controls__navigation');
const siteFilterElement = siteMainElement.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');

render(siteMainElement, new SiteInfoView(waypoints), RenderPosition.AFTERBEGIN);
render(siteMenuElement, new SiteMenuView(), RenderPosition.BEFOREEND);
render(siteFilterElement, new SiteFilterView(), RenderPosition.BEFOREEND);

if (waypoints?.length > 0){
  render(siteEventsElement, new SiteSortView(), RenderPosition.BEFOREEND);
  render(siteEventsElement, new SiteEventsView(), RenderPosition.BEFOREEND);
}
else{
  const text='Click New Event to create your first point';
  render(siteEventsElement, new SiteEmptyView(text), RenderPosition.BEFOREEND);
}

const siteEventElement = siteEventsElement.querySelector('.trip-events__list');
if (waypoints?.length>0){
  render(siteEventElement, new SiteFormCreateView(waypoints[0]), RenderPosition.BEFOREEND);
}


for (let k = 0; k < waypoints?.length; k++) {
  const formEdit=new SiteFormEditView(waypoints[k]);
  const wayPoint=new SiteWaypointView(waypoints[k]);

  const onEscKeyDown=(evnt)=>{
    if (evnt.key==='Esc'||evnt.key==='Escape'){
      evnt.preventDefault();
      siteEventElement.replaceChild(wayPoint.element, formEdit.element);
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  wayPoint.setClickHandler(()=>{
    siteEventElement.replaceChild(formEdit.element, wayPoint.element);
    document.addEventListener('keydown', onEscKeyDown);
  });

  formEdit.setFormSubmitHandler(()=>{
    siteEventElement.replaceChild(wayPoint.element, formEdit.element);
    document.addEventListener('keydown', onEscKeyDown);
  });

  formEdit.setClickHandler(()=>{
      siteEventElement.replaceChild(wayPoint.element, formEdit.element);
      document.removeEventListener('keydown', onEscKeyDown);
    }
  );

  render(siteEventElement, wayPoint.element, RenderPosition.BEFOREEND);
}
