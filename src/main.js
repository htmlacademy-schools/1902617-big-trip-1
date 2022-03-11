import { createSiteMenuTemplate } from './view/site-menu-view.js';
import { renderTemplate, RenderPosition } from './render.js';
import { createSiteFilterTemplate } from './view/site-filter-view.js';
import { createSiteSortTemplate } from './view/site-sort-view.js';
import { createSiteEventsTemplate } from './view/site-events-view.js';
import { createSiteFormCreateTemplate } from './view/site-form-create-view.js';
import { createSiteFormEditTemplate } from './view/site-form-edit-view.js';
import { createSiteWayPointTemplate } from './view/site-waypoint-view.js';

const siteMenuElement = document.querySelector('.trip-controls__navigation');
const siteFilterElement = document.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');


renderTemplate(siteMenuElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteFilterElement, createSiteFilterTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteEventsElement, createSiteSortTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteEventsElement, createSiteEventsTemplate(), RenderPosition.BEFOREEND);

const siteEventElement = siteEventsElement.querySelector('.trip-events__list');
renderTemplate(siteEventElement, createSiteFormCreateTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteEventElement, createSiteFormEditTemplate(), RenderPosition.BEFOREEND);

for (let i = 0; i < 3; i++) {
  renderTemplate(siteEventElement, createSiteWayPointTemplate(), RenderPosition.BEFOREEND);
}
