import SiteFormEditView from '../view/site-form-edit-view.js';
import SiteWaypointView from '../view/site-waypoint-view.js';
import { render, RenderPosition, replace, remove } from '../render.js';

const Mode = {
    DEFAULT: 'DEFAULT',
    EDITING: 'EDITING',
};

export default class PointPresenter{
    #siteEventElement = null;
    #changeData = null;
    #changeMode = null;
    #wayPoint = null;
    #formEdit = null;
    #point = null;
    #mode = Mode.DEFAULT;

    constructor(siteEventElement, changeData, changeMode){
        this.#siteEventElement = siteEventElement;
        this.#changeData = changeData;
        this.#changeMode = changeMode;
    }

    init = (point) =>{
        this.#point = point;
        const lastFormEdit = this.#formEdit;
        const lastWayPoint = this.#wayPoint;

        this.#formEdit = new SiteFormEditView(this.#point);
        this.#wayPoint = new SiteWaypointView(this.#point);

        this.#wayPoint.setFavoriteHandler(this.#favoriteClick);
        this.#wayPoint.setClickHandler(this.#wayPointClick);
        this.#formEdit.setFormSubmitHandler(this.#formEditSubmit);
        this.#formEdit.setClickHandler(this.#formEditClick);

        if (lastFormEdit === null || lastWayPoint === null) {
            render(this.#siteEventElement, this.#wayPoint, RenderPosition.BEFOREEND);
            return;
        }

        if (this.#mode === Mode.DEFAULT){
            replace(this.#wayPoint, lastWayPoint);
        }

        if (this.#mode === Mode.EDITING){
            replace(this.#formEdit, lastFormEdit);
        }

        remove(lastFormEdit);
        remove(lastWayPoint);
    }

    #changeFormEditToWayPoint = () => {
        replace(this.#wayPoint, this.#formEdit);
        document.removeEventListener('keydown', this.#onEscKeyDown);
        this.#mode = Mode.DEFAULT;
    }

    #onEscKeyDown=(evt)=>{
        if (evt.key==='Esc'||evt.key==='Escape'){
            evt.preventDefault();
            this.#changeFormEditToWayPoint();
        }
    }

    #favoriteClick = () => {
        this.#changeData({ ...this.#wayPoint, isFavorite: !this.#wayPoint.isFavorite });
    }

    #wayPointClick = () => {
        replace(this.#formEdit, this.#wayPoint)
        document.addEventListener('keydown', this.#onEscKeyDown);
        this.#changeMode();
        this.#mode = Mode.EDITING;
    }

    #formEditSubmit = (waypoint) => {
        this.#changeFormEditToWayPoint();
        this.#changeData(waypoint);
    }

    #formEditClick = () => {
        this.#changeFormEditToWayPoint();
    }
}
