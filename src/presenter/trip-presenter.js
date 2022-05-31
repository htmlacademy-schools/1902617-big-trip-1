import SiteMenuView from '../view/site-menu-view.js';
import { render, RenderPosition, updateItem } from '../render.js';
import SiteFilterView from '../view/site-filter-view.js';
import SiteSortView from '../view/site-sort-view.js';
import SiteEventsView from '../view/site-events-view.js';
import SiteFormCreateView from '../view/site-form-create-view.js';
import SiteInfoView from '../view/site-info-view.js';
import SiteEmptyView from '../view/site-empty-view.js';
import PointPresenter from './point-presenter.js';

export default class TripPresenter{
    #siteMainElement = null;
    #siteMenuElement = null;
    #siteFilterElement = null;
    #siteEventsElement = null;
    #siteEventElement = null;

    #waypoints=[];
    #wayPointPresenter= new Map();

    constructor(){
      this.#siteMainElement = document.querySelector('.trip-main');
      this.#siteMenuElement = this.#siteMainElement.querySelector('.trip-controls__navigation');
      this.#siteFilterElement = this.#siteMainElement.querySelector('.trip-controls__filters');
      this.#siteEventsElement = document.querySelector('.trip-events');
    }

    init = (waypoints) => {
      this.#waypoints = [...waypoints];

      render(this.#siteMainElement, new SiteInfoView(this.#waypoints), RenderPosition.AFTERBEGIN);
      render(this.#siteMenuElement, new SiteMenuView(), RenderPosition.BEFOREEND);
      render(this.#siteFilterElement, new SiteFilterView(), RenderPosition.BEFOREEND);

      if (waypoints?.length > 0){
        render(this.#siteEventsElement, new SiteSortView(), RenderPosition.BEFOREEND);
        render(this.#siteEventsElement, new SiteEventsView(), RenderPosition.BEFOREEND);
      }
      else {
        const text='Click New Event to create your first point';
        render(this.#siteEventsElement, new SiteEmptyView(text), RenderPosition.BEFOREEND);
      }

      this.#siteEventElement = this.#siteEventsElement.querySelector('.trip-events__list');

      render(this.#siteEventElement, new SiteFormCreateView(this.#waypoints[0]), RenderPosition.BEFOREEND);
      this.#renderWaypoints();
    }

    #changePoint = (newWayPoint) => {
      this.#waypoints = updateItem(this.#waypoints, newWayPoint);
      this.#wayPointPresenter.get(newWayPoint.id).init(newWayPoint);
    }

    #renderWaypoints = () => {
      for (let k = 0; k < this.#waypoints?.length; k++) {
        const pointPresenter = new PointPresenter(this.#siteEventElement, this.#changePoint);
        pointPresenter.init(this.#waypoints[k]);
        this.#wayPointPresenter.set(this.#waypoints[k].id, pointPresenter);
      }
    }

    #clearWayPointsList = () => {
      this.#wayPointPresenter.forEach((x) => x.destroy());
      this.#wayPointPresenter.clear();
    }
}
