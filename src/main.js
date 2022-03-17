import { createSiteMenuTemplate } from './view/site-menu-view.js';
import { renderTemplate, RenderPosition } from './render.js';
import { createSiteFilterTemplate } from './view/site-filter-view.js';
import { createSiteSortTemplate } from './view/site-sort-view.js';
import { createSiteEventsTemplate } from './view/site-events-view.js';
import { createSiteFormCreateTemplate } from './view/site-form-create-view.js';
import { createSiteFormEditTemplate } from './view/site-form-edit-view.js';
import { createSiteWayPointTemplate } from './view/site-waypoint-view.js';
import {createInfoTemplate} from './view/site-info-view.js';
import { getPoint } from './mockData/Waypoint.js';

const waypointsNum = 17;
const waypoints = Array.from({ length: waypointsNum }, getPoint()).sort((x, y) => x.date_from - y.date_from);

const siteMainElement = document.querySelector('.trip-main');
const siteMenuElement = siteMainElement.querySelector('.trip-controls__navigation');
const siteFilterElement = siteMainElement.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');

renderTemplate(siteMainElement, createInfoTemplate(waypoints), RenderPosition.AFTERBEGIN);
renderTemplate(siteMenuElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteFilterElement, createSiteFilterTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteEventsElement, createSiteSortTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteEventsElement, createSiteEventsTemplate(), RenderPosition.BEFOREEND);

const siteEventElement = siteEventsElement.querySelector('.trip-events__list');
renderTemplate(siteEventElement, createSiteFormCreateTemplate(waypoints[0]), RenderPosition.BEFOREEND);
renderTemplate(siteEventElement, createSiteFormEditTemplate(waypoints[0]), RenderPosition.BEFOREEND);

for (let k = 1; k < waypointsNum; k++) {
  renderTemplate(siteEventElement, createSiteWayPointTemplate(waypoints[k]), RenderPosition.BEFOREEND);
}
