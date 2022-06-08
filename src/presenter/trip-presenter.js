import SiteMenuView from '../view/site-menu-view.js';
import SiteFilterView from '../view/site-filter-view.js';
import SiteSortView from '../view/site-sort-view.js';
import SiteEventsView from '../view/site-events-view.js';
import SiteInfoView from '../view/site-info-view.js';
import SiteEmptyView from '../view/site-empty-view.js';
import PointPresenter from './point-presenter.js';
import { SortType } from '../const.js';
import { render, RenderPosition, updateItem, replace } from '../render.js';
import { sortWayPointsByDay, sortWayPointsByDuration, sortWayPointsByPrice } from '../tools.js';

export default class TripPresenter{
    #siteMainElement = null;
    #siteMenuElement = null;
    #siteFilterElement = null;
    #siteEventsElement = null;
    #siteEventElement = null;
    #siteInfoElement = null;

    #sortElement = new SiteSortView();
    #menuElement = new SiteMenuView();
    #filterElement = new SiteFilterView();
    #eventsElement = new SiteEventsView();

    #waypoints=[];
    #wayPointPresenter= new Map();
    #currentSortType = SortType.DAY;

    constructor(){
      this.#siteMainElement = document.querySelector('.trip-main');
      this.#siteMenuElement = this.#siteMainElement.querySelector('.trip-controls__navigation');
      this.#siteFilterElement = this.#siteMainElement.querySelector('.trip-controls__filters');
      this.#siteEventsElement = document.querySelector('.trip-events');
    }

    init = (waypoints) => {
      this.#waypoints = [...waypoints];
      this.#currentSortType = SortType.DAY;
      this.#sortWaypoints(this.#currentSortType);
      this.#siteInfoElement = new SiteInfoView(this.#waypoints);

      render(this.#siteMainElement, this.#siteInfoElement, RenderPosition.AFTERBEGIN);
      render(this.#siteMenuElement, this.#menuElement, RenderPosition.BEFOREEND);
      render(this.#siteFilterElement, this.#filterElement, RenderPosition.BEFOREEND);

      if (waypoints?.length > 0){
        render(this.#siteEventsElement, this.#sortElement, RenderPosition.BEFOREEND);
        this.#sortElement.setSortTypeChangeHandler(this.#changeSortType);
        render(this.#siteEventsElement, this.#eventsElement, RenderPosition.BEFOREEND);
      }
      else {
        const text='Click New Event to create your first point';
        render(this.#siteEventsElement, new SiteEmptyView(text), RenderPosition.BEFOREEND);
      }

      this.#siteEventElement = this.#siteEventsElement.querySelector('.trip-events__list');

      this.#renderWaypoints();
    }

    #sortWaypoints = (typeToSort) =>{
      switch (typeToSort){
        case SortType.DAY:
          this.#waypoints.sort(sortWayPointsByDay);
          break;
        case SortType.TIME:
          this.#waypoints.sort(sortWayPointsByDuration);
          break;
        case SortType.PRICE:
          this.#waypoints.sort(sortWayPointsByPrice);
          break;
      }

      this.#currentSortType = typeToSort;
    }

    #changeSortType = (typeToSort) =>{
      if (this.#currentSortType === typeToSort){
        return;
      }

      this.#sortWaypoints(typeToSort);
      this.#renderAgain();
    }

    #changeMode = () => {
      this.#wayPointPresenter.forEach((x) => x.resetView());
    }

    #changePoint = (newWayPoint) => {
      this.#waypoints = updateItem(this.#waypoints, newWayPoint);

      const lastSiteInfoElement = this.#siteInfoElement;
      this.#siteInfoElement = new SiteInfoView(this.#waypoints);
      replace(this.#siteInfoElement, lastSiteInfoElement);

      this.#sortWaypoints(this.#currentSortType);
      this.#renderAgain();
    }

    #renderWaypoint = (waypoint) => {
      const pointPresenter = new PointPresenter(this.#siteEventElement, this.#changePoint, this.#changeMode);
      pointPresenter.init(waypoint);
      this.#wayPointPresenter.set(waypoint.id, pointPresenter);
    }

    #renderWaypoints = () => {
      for (let k = 0; k < this.#waypoints.length; k++) {
        this.#renderWaypoint(this.#waypoints[k]);
      }
    }

    #clearWayPointsList = () => {
      this.#wayPointPresenter.forEach((x) => x.destroy());
      this.#wayPointPresenter.clear();
    }

    #renderAgain = () => {
      this.#clearWayPointsList();
      this.#renderWaypoints();
    }

}
