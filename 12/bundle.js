/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortType": () => (/* binding */ SortType)
/* harmony export */ });
const SortType = {
  DAY: 'day',
  TIME: 'time',
  PRICE: 'price'
};

/***/ }),

/***/ "./src/mockData/Waypoint.js":
/*!**********************************!*\
  !*** ./src/mockData/Waypoint.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOffers": () => (/* binding */ getOffers),
/* harmony export */   "getPoint": () => (/* binding */ getPoint)
/* harmony export */ });
/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools.js */ "./src/tools.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.dev.js");


const cities = ['Amsterdam', 'Chamonix', 'Geneva', 'Ekaterinburg'];
const sentences = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat.', 'Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];
const types = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const offersTypes = ['Add luggage', 'Switch to comfort class', 'Add meal', 'Choose seats', 'Travel by train', 'Order Uber', 'Rent a car'];

const getDestination = () => {
  const name = (0,_tools_js__WEBPACK_IMPORTED_MODULE_0__.getRandomElement)(cities);
  const discNum = (0,_tools_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 5);
  let description = '';

  for (let k = 0; k < discNum; k++) {
    description = [description, (0,_tools_js__WEBPACK_IMPORTED_MODULE_0__.getRandomElement)(sentences)].join(' ');
  }

  const picNum = (0,_tools_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 5);
  const pictures = [];

  for (let k = 0; k < picNum; k++) {
    pictures.push({
      src: `http://picsum.photos/300/200?r=${Math.random().toString()}`,
      description: `Somewhere in ${name}`
    });
  }

  return {
    description,
    name,
    pictures
  };
};

const getOffers = someType => {
  const offersNum = (0,_tools_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, 5);
  const offers = [];

  for (let k = 0; k < offersNum; k++) {
    offers.push({
      id: k + 1,
      title: (0,_tools_js__WEBPACK_IMPORTED_MODULE_0__.getRandomElement)(offersTypes),
      price: (0,_tools_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 20) * 10
    });
  }

  return {
    type: someType,
    offers
  };
};
const getPoint = () => {
  const type = (0,_tools_js__WEBPACK_IMPORTED_MODULE_0__.getRandomElement)(types);
  const dateFrom = (0,_tools_js__WEBPACK_IMPORTED_MODULE_0__.getTime)((0,_tools_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 864) * 5);
  const dateTo = (0,_tools_js__WEBPACK_IMPORTED_MODULE_0__.getTime)((0,_tools_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 24) * 5, dateFrom);
  return {
    basePrice: (0,_tools_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, 1200),
    dateFrom,
    dateTo,
    destination: getDestination(),
    id: (0,nanoid__WEBPACK_IMPORTED_MODULE_1__.nanoid)(),
    isFavorite: (0,_tools_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, 1) === 1,
    offers: getOffers(type),
    type
  };
};

/***/ }),

/***/ "./src/presenter/point-presenter.js":
/*!******************************************!*\
  !*** ./src/presenter/point-presenter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointPresenter)
/* harmony export */ });
/* harmony import */ var _view_site_form_edit_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/site-form-edit-view.js */ "./src/view/site-form-edit-view.js");
/* harmony import */ var _view_site_waypoint_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/site-waypoint-view.js */ "./src/view/site-waypoint-view.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

var _siteEventElement = /*#__PURE__*/new WeakMap();

var _changeData = /*#__PURE__*/new WeakMap();

var _changeMode = /*#__PURE__*/new WeakMap();

var _wayPoint = /*#__PURE__*/new WeakMap();

var _formEdit = /*#__PURE__*/new WeakMap();

var _point = /*#__PURE__*/new WeakMap();

var _mode = /*#__PURE__*/new WeakMap();

var _changeFormEditToWayPoint = /*#__PURE__*/new WeakMap();

var _onEscKeyDown = /*#__PURE__*/new WeakMap();

var _favoriteClick = /*#__PURE__*/new WeakMap();

var _wayPointClick = /*#__PURE__*/new WeakMap();

var _formEditSubmit = /*#__PURE__*/new WeakMap();

var _formEditClick = /*#__PURE__*/new WeakMap();

class PointPresenter {
  constructor(siteEventElement, changeData, changeMode) {
    _classPrivateFieldInitSpec(this, _siteEventElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _changeData, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _changeMode, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _wayPoint, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _formEdit, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _point, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _mode, {
      writable: true,
      value: Mode.DEFAULT
    });

    _defineProperty(this, "init", point => {
      _classPrivateFieldSet(this, _point, point);

      const lastFormEdit = _classPrivateFieldGet(this, _formEdit);

      const lastWayPoint = _classPrivateFieldGet(this, _wayPoint);

      _classPrivateFieldSet(this, _formEdit, new _view_site_form_edit_view_js__WEBPACK_IMPORTED_MODULE_0__["default"](_classPrivateFieldGet(this, _point)));

      _classPrivateFieldSet(this, _wayPoint, new _view_site_waypoint_view_js__WEBPACK_IMPORTED_MODULE_1__["default"](_classPrivateFieldGet(this, _point)));

      _classPrivateFieldGet(this, _wayPoint).setFavoriteHandler(_classPrivateFieldGet(this, _favoriteClick));

      _classPrivateFieldGet(this, _wayPoint).setClickHandler(_classPrivateFieldGet(this, _wayPointClick));

      _classPrivateFieldGet(this, _formEdit).setFormSubmitHandler(_classPrivateFieldGet(this, _formEditSubmit));

      _classPrivateFieldGet(this, _formEdit).setClickHandler(_classPrivateFieldGet(this, _formEditClick));

      if (lastFormEdit === null || lastWayPoint === null) {
        (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.render)(_classPrivateFieldGet(this, _siteEventElement), _classPrivateFieldGet(this, _wayPoint), _render_js__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFOREEND);
        return;
      }

      if (_classPrivateFieldGet(this, _mode) === Mode.DEFAULT) {
        (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _wayPoint), lastWayPoint);
      }

      if (_classPrivateFieldGet(this, _mode) === Mode.EDITING) {
        (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _formEdit), lastFormEdit);
      }

      (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.remove)(lastFormEdit);
      (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.remove)(lastWayPoint);
    });

    _defineProperty(this, "resetView", () => {
      if (_classPrivateFieldGet(this, _mode) !== Mode.DEFAULT) {
        _classPrivateFieldGet(this, _changeFormEditToWayPoint).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _changeFormEditToWayPoint, {
      writable: true,
      value: () => {
        (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _wayPoint), _classPrivateFieldGet(this, _formEdit));
        document.removeEventListener('keydown', _classPrivateFieldGet(this, _onEscKeyDown));

        _classPrivateFieldSet(this, _mode, Mode.DEFAULT);
      }
    });

    _classPrivateFieldInitSpec(this, _onEscKeyDown, {
      writable: true,
      value: evt => {
        if (evt.key === 'Esc' || evt.key === 'Escape') {
          evt.preventDefault();

          _classPrivateFieldGet(this, _changeFormEditToWayPoint).call(this);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _favoriteClick, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _changeData).call(this, { ..._classPrivateFieldGet(this, _point),
          isFavorite: !_classPrivateFieldGet(this, _point).isFavorite
        });
      }
    });

    _classPrivateFieldInitSpec(this, _wayPointClick, {
      writable: true,
      value: () => {
        (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _formEdit), _classPrivateFieldGet(this, _wayPoint));
        document.addEventListener('keydown', _classPrivateFieldGet(this, _onEscKeyDown));

        _classPrivateFieldGet(this, _changeMode).call(this);

        _classPrivateFieldSet(this, _mode, Mode.EDITING);
      }
    });

    _classPrivateFieldInitSpec(this, _formEditSubmit, {
      writable: true,
      value: waypoint => {
        _classPrivateFieldGet(this, _changeFormEditToWayPoint).call(this);

        _classPrivateFieldGet(this, _changeData).call(this, waypoint);
      }
    });

    _classPrivateFieldInitSpec(this, _formEditClick, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _changeFormEditToWayPoint).call(this);
      }
    });

    _classPrivateFieldSet(this, _siteEventElement, siteEventElement);

    _classPrivateFieldSet(this, _changeData, changeData);

    _classPrivateFieldSet(this, _changeMode, changeMode);
  }

}

/***/ }),

/***/ "./src/presenter/trip-presenter.js":
/*!*****************************************!*\
  !*** ./src/presenter/trip-presenter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripPresenter)
/* harmony export */ });
/* harmony import */ var _view_site_menu_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/site-menu-view.js */ "./src/view/site-menu-view.js");
/* harmony import */ var _view_site_filter_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/site-filter-view.js */ "./src/view/site-filter-view.js");
/* harmony import */ var _view_site_sort_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/site-sort-view.js */ "./src/view/site-sort-view.js");
/* harmony import */ var _view_site_events_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/site-events-view.js */ "./src/view/site-events-view.js");
/* harmony import */ var _view_site_info_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/site-info-view.js */ "./src/view/site-info-view.js");
/* harmony import */ var _view_site_empty_view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/site-empty-view.js */ "./src/view/site-empty-view.js");
/* harmony import */ var _point_presenter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./point-presenter.js */ "./src/presenter/point-presenter.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tools.js */ "./src/tools.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }












var _siteMainElement = /*#__PURE__*/new WeakMap();

var _siteMenuElement = /*#__PURE__*/new WeakMap();

var _siteFilterElement = /*#__PURE__*/new WeakMap();

var _siteEventsElement = /*#__PURE__*/new WeakMap();

var _siteEventElement = /*#__PURE__*/new WeakMap();

var _sortElement = /*#__PURE__*/new WeakMap();

var _menuElement = /*#__PURE__*/new WeakMap();

var _filterElement = /*#__PURE__*/new WeakMap();

var _eventsElement = /*#__PURE__*/new WeakMap();

var _waypoints = /*#__PURE__*/new WeakMap();

var _wayPointPresenter = /*#__PURE__*/new WeakMap();

var _currentSortType = /*#__PURE__*/new WeakMap();

var _sortWaypoints = /*#__PURE__*/new WeakMap();

var _changeSortType = /*#__PURE__*/new WeakMap();

var _changeMode = /*#__PURE__*/new WeakMap();

var _changePoint = /*#__PURE__*/new WeakMap();

var _renderWaypoint = /*#__PURE__*/new WeakMap();

var _renderWaypoints = /*#__PURE__*/new WeakMap();

var _clearWayPointsList = /*#__PURE__*/new WeakMap();

class TripPresenter {
  constructor() {
    _classPrivateFieldInitSpec(this, _siteMainElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _siteMenuElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _siteFilterElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _siteEventsElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _siteEventElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _sortElement, {
      writable: true,
      value: new _view_site_sort_view_js__WEBPACK_IMPORTED_MODULE_2__["default"]()
    });

    _classPrivateFieldInitSpec(this, _menuElement, {
      writable: true,
      value: new _view_site_menu_view_js__WEBPACK_IMPORTED_MODULE_0__["default"]()
    });

    _classPrivateFieldInitSpec(this, _filterElement, {
      writable: true,
      value: new _view_site_filter_view_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    });

    _classPrivateFieldInitSpec(this, _eventsElement, {
      writable: true,
      value: new _view_site_events_view_js__WEBPACK_IMPORTED_MODULE_3__["default"]()
    });

    _classPrivateFieldInitSpec(this, _waypoints, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _wayPointPresenter, {
      writable: true,
      value: new Map()
    });

    _classPrivateFieldInitSpec(this, _currentSortType, {
      writable: true,
      value: _const_js__WEBPACK_IMPORTED_MODULE_7__.SortType.DAY
    });

    _defineProperty(this, "init", waypoints => {
      _classPrivateFieldSet(this, _waypoints, [...waypoints]);

      _classPrivateFieldSet(this, _currentSortType, _const_js__WEBPACK_IMPORTED_MODULE_7__.SortType.DAY);

      _classPrivateFieldGet(this, _sortWaypoints).call(this, _classPrivateFieldGet(this, _currentSortType));

      (0,_render_js__WEBPACK_IMPORTED_MODULE_8__.render)(_classPrivateFieldGet(this, _siteMainElement), new _view_site_info_view_js__WEBPACK_IMPORTED_MODULE_4__["default"](_classPrivateFieldGet(this, _waypoints)), _render_js__WEBPACK_IMPORTED_MODULE_8__.RenderPosition.AFTERBEGIN);
      (0,_render_js__WEBPACK_IMPORTED_MODULE_8__.render)(_classPrivateFieldGet(this, _siteMenuElement), _classPrivateFieldGet(this, _menuElement), _render_js__WEBPACK_IMPORTED_MODULE_8__.RenderPosition.BEFOREEND);
      (0,_render_js__WEBPACK_IMPORTED_MODULE_8__.render)(_classPrivateFieldGet(this, _siteFilterElement), _classPrivateFieldGet(this, _filterElement), _render_js__WEBPACK_IMPORTED_MODULE_8__.RenderPosition.BEFOREEND);

      if ((waypoints === null || waypoints === void 0 ? void 0 : waypoints.length) > 0) {
        (0,_render_js__WEBPACK_IMPORTED_MODULE_8__.render)(_classPrivateFieldGet(this, _siteEventsElement), _classPrivateFieldGet(this, _sortElement), _render_js__WEBPACK_IMPORTED_MODULE_8__.RenderPosition.BEFOREEND);

        _classPrivateFieldGet(this, _sortElement).setSortTypeChangeHandler(_classPrivateFieldGet(this, _changeSortType));

        (0,_render_js__WEBPACK_IMPORTED_MODULE_8__.render)(_classPrivateFieldGet(this, _siteEventsElement), _classPrivateFieldGet(this, _eventsElement), _render_js__WEBPACK_IMPORTED_MODULE_8__.RenderPosition.BEFOREEND);
      } else {
        const text = 'Click New Event to create your first point';
        (0,_render_js__WEBPACK_IMPORTED_MODULE_8__.render)(_classPrivateFieldGet(this, _siteEventsElement), new _view_site_empty_view_js__WEBPACK_IMPORTED_MODULE_5__["default"](text), _render_js__WEBPACK_IMPORTED_MODULE_8__.RenderPosition.BEFOREEND);
      }

      _classPrivateFieldSet(this, _siteEventElement, _classPrivateFieldGet(this, _siteEventsElement).querySelector('.trip-events__list'));

      _classPrivateFieldGet(this, _renderWaypoints).call(this);
    });

    _classPrivateFieldInitSpec(this, _sortWaypoints, {
      writable: true,
      value: typeToSort => {
        switch (typeToSort) {
          case _const_js__WEBPACK_IMPORTED_MODULE_7__.SortType.DAY:
            _classPrivateFieldGet(this, _waypoints).sort(_tools_js__WEBPACK_IMPORTED_MODULE_9__.sortWayPointsByDay);

            break;

          case _const_js__WEBPACK_IMPORTED_MODULE_7__.SortType.TIME:
            _classPrivateFieldGet(this, _waypoints).sort(_tools_js__WEBPACK_IMPORTED_MODULE_9__.sortWayPointsByDuration);

            break;

          case _const_js__WEBPACK_IMPORTED_MODULE_7__.SortType.PRICE:
            _classPrivateFieldGet(this, _waypoints).sort(_tools_js__WEBPACK_IMPORTED_MODULE_9__.sortWayPointsByPrice);

            break;
        }

        _classPrivateFieldSet(this, _currentSortType, typeToSort);
      }
    });

    _classPrivateFieldInitSpec(this, _changeSortType, {
      writable: true,
      value: typeToSort => {
        if (_classPrivateFieldGet(this, _currentSortType) === typeToSort) {
          return;
        }

        _classPrivateFieldGet(this, _sortWaypoints).call(this, typeToSort);

        _classPrivateFieldGet(this, _clearWayPointsList).call(this);

        _classPrivateFieldGet(this, _renderWaypoints).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _changeMode, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _wayPointPresenter).forEach(x => x.resetView());
      }
    });

    _classPrivateFieldInitSpec(this, _changePoint, {
      writable: true,
      value: newWayPoint => {
        _classPrivateFieldSet(this, _waypoints, (0,_render_js__WEBPACK_IMPORTED_MODULE_8__.updateItem)(_classPrivateFieldGet(this, _waypoints), newWayPoint));

        _classPrivateFieldGet(this, _wayPointPresenter).get(newWayPoint.id).init(newWayPoint);
      }
    });

    _classPrivateFieldInitSpec(this, _renderWaypoint, {
      writable: true,
      value: waypoint => {
        const pointPresenter = new _point_presenter_js__WEBPACK_IMPORTED_MODULE_6__["default"](_classPrivateFieldGet(this, _siteEventElement), _classPrivateFieldGet(this, _changePoint), _classPrivateFieldGet(this, _changeMode));
        pointPresenter.init(waypoint);

        _classPrivateFieldGet(this, _wayPointPresenter).set(waypoint.id, pointPresenter);
      }
    });

    _classPrivateFieldInitSpec(this, _renderWaypoints, {
      writable: true,
      value: () => {
        for (let k = 0; k < _classPrivateFieldGet(this, _waypoints).length; k++) {
          _classPrivateFieldGet(this, _renderWaypoint).call(this, _classPrivateFieldGet(this, _waypoints)[k]);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _clearWayPointsList, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _wayPointPresenter).forEach(x => x.destroy());

        _classPrivateFieldGet(this, _wayPointPresenter).clear();
      }
    });

    _classPrivateFieldSet(this, _siteMainElement, document.querySelector('.trip-main'));

    _classPrivateFieldSet(this, _siteMenuElement, _classPrivateFieldGet(this, _siteMainElement).querySelector('.trip-controls__navigation'));

    _classPrivateFieldSet(this, _siteFilterElement, _classPrivateFieldGet(this, _siteMainElement).querySelector('.trip-controls__filters'));

    _classPrivateFieldSet(this, _siteEventsElement, document.querySelector('.trip-events'));
  }

}

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "replace": () => (/* binding */ replace),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "updateItem": () => (/* binding */ updateItem)
/* harmony export */ });
/* harmony import */ var _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/abstract-view.js */ "./src/view/abstract-view.js");

const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};
const render = (container, element, place) => {
  const parent = container instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? container.element : container;
  const child = element instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? element.element : element;

  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      parent.before(child);
      break;

    case RenderPosition.AFTERBEGIN:
      parent.prepend(child);
      break;

    case RenderPosition.BEFOREEND:
      parent.append(child);
      break;

    case RenderPosition.AFTEREND:
      parent.after(child);
      break;
  }
};
const createElement = element => {
  const newElement = document.createElement('div');
  newElement.innerHTML = element;
  return newElement.firstChild;
};
const replace = (newElement, oldElement) => {
  if (newElement === null || oldElement === null) {
    throw new Error('Can\'t replace unexisting elements');
  }

  const oldChild = oldElement instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? oldElement.element : oldElement;
  const newChild = newElement instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? newElement.element : newElement;
  const parent = oldChild.parentElement;

  if (parent === null) {
    throw new Error('Parent element doesn\'t exist');
  }

  parent.replaceChild(newChild, oldChild);
};
const remove = component => {
  if (component === null) {
    return;
  }

  if (!(component instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error('Can remove only components');
  }

  component.element.remove();
  component.removeElement();
};
const updateItem = (items, update) => {
  const index = items.findIndex(item => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [...items.slice(0, index), update, ...items.slice(index + 1)];
};

/***/ }),

/***/ "./src/tools.js":
/*!**********************!*\
  !*** ./src/tools.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt),
/* harmony export */   "getRandomElement": () => (/* binding */ getRandomElement),
/* harmony export */   "getTime": () => (/* binding */ getTime),
/* harmony export */   "getInterval": () => (/* binding */ getInterval),
/* harmony export */   "sortWayPointsByDay": () => (/* binding */ sortWayPointsByDay),
/* harmony export */   "sortWayPointsByPrice": () => (/* binding */ sortWayPointsByPrice),
/* harmony export */   "sortWayPointsByDuration": () => (/* binding */ sortWayPointsByDuration)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const getRandomElement = elements => elements[getRandomInt(0, elements.length - 1)];
const getTime = (interval, lastDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()()) => lastDate.add(interval, 'minute');
const getInterval = interval => {
  let hours = Math.trunc(+interval / 60);
  const days = Math.trunc(hours / 24);
  const minutes = +interval % 60;
  hours = hours % 24;
  let finalTime = '';

  if (days > 0) {
    if (days > 9) {
      finalTime += `${days.toString()}D `;
    } else {
      finalTime += `0${days.toString()}D `;
    }
  }

  if (days > 0 || hours > 0) {
    if (hours > 9) {
      finalTime += `${hours.toString()}H `;
    } else {
      finalTime += `0${hours.toString()}H `;
    }
  }

  if (minutes > 9) {
    finalTime += `${minutes.toString()}M `;
  } else {
    finalTime += `0${minutes.toString()}M `;
  }

  return finalTime;
};
const sortWayPointsByDay = (x, y) => x.dateFrom - y.dateFrom;
const sortWayPointsByPrice = (x, y) => y.basePrice - x.basePrice;
const sortWayPointsByDuration = (x, y) => y.dateTo - y.dateFrom - (x.dateTo - x.dateFrom);

/***/ }),

/***/ "./src/view/abstract-view.js":
/*!***********************************!*\
  !*** ./src/view/abstract-view.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractView)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ "./src/render.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



var _element = /*#__PURE__*/new WeakMap();

class AbstractView {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });

    _defineProperty(this, "_callback", {});

    if (new.target === AbstractView) {
      throw new Error('Can\'t instantiate AbstractView, only concrete one.');
    }
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    throw new Error('Abstract method not implemented: get template');
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/site-empty-view.js":
/*!*************************************!*\
  !*** ./src/view/site-empty-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteEmptyView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



const createSiteEmptyTemplate = text => `<p class="trip-events__msg">${text}</p>`;

var _text = /*#__PURE__*/new WeakMap();

class SiteEmptyView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(text) {
    super();

    _classPrivateFieldInitSpec(this, _text, {
      writable: true,
      value: null
    });

    _classPrivateFieldSet(this, _text, text);
  }

  get template() {
    return createSiteEmptyTemplate(_classPrivateFieldGet(this, _text));
  }

}

/***/ }),

/***/ "./src/view/site-events-view.js":
/*!**************************************!*\
  !*** ./src/view/site-events-view.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteEventsView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");


const createSiteEventsTemplate = () => `<ul class="trip-events__list">
    </ul>`;

class SiteEventsView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createSiteEventsTemplate();
  }

}

/***/ }),

/***/ "./src/view/site-filter-view.js":
/*!**************************************!*\
  !*** ./src/view/site-filter-view.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteFilterView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");


const createSiteFilterTemplate = () => `<form class="trip-filters" action="#" method="get">
      <div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
      </div>
  
      <div class="trip-filters__filter">
        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
        <label class="trip-filters__filter-label" for="filter-future">Future</label>
      </div>
  
      <div class="trip-filters__filter">
        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
        <label class="trip-filters__filter-label" for="filter-past">Past</label>
      </div>
  
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`;

class SiteFilterView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createSiteFilterTemplate();
  }

}

/***/ }),

/***/ "./src/view/site-form-edit-view.js":
/*!*****************************************!*\
  !*** ./src/view/site-form-edit-view.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteFormEditView)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




const createSiteFormOffersTemplate = (someOffers, someType) => {
  if (someOffers.length === 0) {
    return '';
  }

  someOffers = someOffers.map(offer => `<div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${someType}-${offer.id}" type="checkbox" name="event-offer-${someType}" checked="checked">
  <label class="event__offer-label" for="event-offer-${someType}-${offer.id}">
    <span class="event__offer-title">${offer.title}</span>d
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

const createSiteFormDescription = (description = '', pictures = []) => {
  if (description.length === 0 && pictures.length === 0) {
    return '';
  }

  let finalPictures = '';

  if (pictures.length !== 0) {
    const pictureTemporary = pictures.map(pic => `<img class="event__photo" src="${pic.src}" alt="${pic.description}">`).join('\n');
    finalPictures = `<div class="event__photos-container">
        <div class="event__photos-tape">
          ${pictureTemporary}
        </div>
      </div>`;
  }

  return `<section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${description}</p>
    ${finalPictures}
  </section>`;
};

const createSiteFormEditTemplate = waypoint => {
  const pointDate = waypoint.dateFrom;
  const pointDateEnd = waypoint.dateTo;
  const pointType = waypoint.type;
  const pointCity = waypoint.destination.name;
  const pointPrice = waypoint.basePrice;
  const pointOffers = waypoint.offers.offers;
  const pointOffersType = waypoint.offers.type;
  const pointDescription = waypoint.destination.description;
  const pointPictures = waypoint.destination.pictures;
  const pointId = waypoint.id;
  return `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-${pointId}">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${pointType}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${pointId}" type="checkbox">
            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                <div class="event__type-item">
                  <input id="event-type-taxi-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                  <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-${pointId}">Taxi</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-bus-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                  <label class="event__type-label  event__type-label--bus" for="event-type-bus-${pointId}">Bus</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-train-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                  <label class="event__type-label  event__type-label--train" for="event-type-train-${pointId}">Train</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-ship-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                  <label class="event__type-label  event__type-label--ship" for="event-type-ship-${pointId}">Ship</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-drive-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                  <label class="event__type-label  event__type-label--drive" for="event-type-drive-${pointId}">Drive</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-flight-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
                  <label class="event__type-label  event__type-label--flight" for="event-type-flight-${pointId}">Flight</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-check-in-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                  <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-${pointId}">Check-in</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-sightseeing-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                  <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-${pointId}">Sightseeing</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-restaurant-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                  <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-${pointId}">Restaurant</label>
                </div>
              </fieldset>
            </div>
          </div>
          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-${pointId}">
            ${pointType}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-${pointId}" type="text" name="event-destination" value="${pointCity}" list="destination-list-1">
            <datalist id="destination-list-${pointId}">
              <option value="Amsterdam"></option>
              <option value="Geneva"></option>
              <option value="Chamonix"></option>
            </datalist>
          </div>
          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-${pointId}">From</label>
            <input class="event__input  event__input--time" id="event-start-time-${pointId}" type="text" name="event-start-time" value="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointDate, 'YY/MM/DD HH:mm')}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-${pointId}">To</label>
            <input class="event__input  event__input--time" id="event-end-time-${pointId}" type="text" name="event-end-time" value="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointDateEnd, 'YY/MM/DD HH:mm')}">
          </div>
          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-${pointId}">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-${pointId}" type="text" name="event-price" value="${pointPrice}">
          </div>
          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">

        ${createSiteFormOffersTemplate(pointOffers, pointOffersType)}

        ${createSiteFormDescription(pointDescription, pointPictures)}

        </section>
      </form>
    </li>`;
};

var _waypoint = /*#__PURE__*/new WeakMap();

var _clickHandler = /*#__PURE__*/new WeakMap();

var _formSubmitHandler = /*#__PURE__*/new WeakMap();

class SiteFormEditView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(waypoint) {
    super();

    _classPrivateFieldInitSpec(this, _waypoint, {
      writable: true,
      value: null
    });

    _defineProperty(this, "setClickHandler", callback => {
      this._callback.click = callback;
      this.element.querySelector('.event__rollup-btn').addEventListener('click', _classPrivateFieldGet(this, _clickHandler));
    });

    _classPrivateFieldInitSpec(this, _clickHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.click();
      }
    });

    _defineProperty(this, "setFormSubmitHandler", callback => {
      this._callback.formSubmit = callback;
      this.element.querySelector('form').addEventListener('submit', _classPrivateFieldGet(this, _formSubmitHandler));
    });

    _classPrivateFieldInitSpec(this, _formSubmitHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.formSubmit(_classPrivateFieldGet(this, _waypoint));
      }
    });

    _classPrivateFieldSet(this, _waypoint, waypoint);
  }

  get template() {
    return createSiteFormEditTemplate(_classPrivateFieldGet(this, _waypoint));
  }

}

/***/ }),

/***/ "./src/view/site-info-view.js":
/*!************************************!*\
  !*** ./src/view/site-info-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteInfoView)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




const createInfoTemplate = waypoints => {
  const pointDate = waypoints[0].dateFrom;
  const pointDateEnd = waypoints[waypoints.length - 1].dateTo;
  let totalPrice = 0;
  let totalRoute = '';
  let lastCity = '';

  for (const waypoint of waypoints) {
    totalPrice += waypoint.basePrice;
    waypoint.offers.offers.forEach(offer => {
      totalPrice += offer.price;
    });

    if (waypoint.destination.name !== lastCity) {
      lastCity = waypoint.destination.name;
      totalRoute = [totalRoute, lastCity].join(' &mdash; ');
    }
  }

  return `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${totalRoute}</h1>
        <p class="trip-info__dates">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointDate, 'MMM D')}&nbsp;&mdash;&nbsp;${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointDateEnd, 'D')}</p>
      </div>
      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
      </p>
    </section>`;
};

var _waypoints = /*#__PURE__*/new WeakMap();

class SiteInfoView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(waypoints) {
    super();

    _classPrivateFieldInitSpec(this, _waypoints, {
      writable: true,
      value: null
    });

    _classPrivateFieldSet(this, _waypoints, waypoints);
  }

  get template() {
    var _classPrivateFieldGet2;

    if (((_classPrivateFieldGet2 = _classPrivateFieldGet(this, _waypoints)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.length) > 0) {
      return createInfoTemplate(_classPrivateFieldGet(this, _waypoints));
    }

    return ' ';
  }

}

/***/ }),

/***/ "./src/view/site-menu-view.js":
/*!************************************!*\
  !*** ./src/view/site-menu-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteMenuView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");


const createSiteMenuTemplate = () => ` <nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
  </nav>`;

class SiteMenuView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createSiteMenuTemplate();
  }

}

/***/ }),

/***/ "./src/view/site-sort-view.js":
/*!************************************!*\
  !*** ./src/view/site-sort-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteSortView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }




const createSiteSortTemplate = () => ` <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <div class="trip-sort__item  trip-sort__item--day">
        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__.SortType.DAY}" checked>
        <label class="trip-sort__btn" for="sort-day">Day</label>
      </div>
      <div class="trip-sort__item  trip-sort__item--event">
        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
        <label class="trip-sort__btn" for="sort-event">Event</label>
      </div>
      <div class="trip-sort__item  trip-sort__item--time">
        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__.SortType.TIME}">
        <label class="trip-sort__btn" for="sort-time">Time</label>
      </div>
      <div class="trip-sort__item  trip-sort__item--price">
        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__.SortType.PRICE}">
        <label class="trip-sort__btn" for="sort-price">Price</label>
      </div>
      <div class="trip-sort__item  trip-sort__item--offer">
        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
        <label class="trip-sort__btn" for="sort-offer">Offers</label>
      </div>
    </form>`;

var _sortTypeChangeHandler = /*#__PURE__*/new WeakMap();

class SiteSortView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "setSortTypeChangeHandler", callback => {
      this._callback.sortTypeChange = callback;
      this.element.addEventListener('click', _classPrivateFieldGet(this, _sortTypeChangeHandler));
    });

    _classPrivateFieldInitSpec(this, _sortTypeChangeHandler, {
      writable: true,
      value: evt => {
        if (evt.target.tagName.toLowerCase() !== 'input') {
          return;
        }

        this._callback.sortTypeChange(evt.target.dataset.sortType);
      }
    });
  }

  get template() {
    return createSiteSortTemplate();
  }

}

/***/ }),

/***/ "./src/view/site-waypoint-view.js":
/*!****************************************!*\
  !*** ./src/view/site-waypoint-view.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteWayPointView)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools */ "./src/tools.js");
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





const createSiteOffersTemplate = someOffers => {
  if (someOffers.length === 0) {
    return '';
  }

  someOffers = someOffers.map(offer => `<li class="event__offer">
  <span class="event__offer-title">${offer.title}</span>
  &plus;&euro;&nbsp;
  <span class="event__offer-price">${offer.price}</span>
  </li>`).join('\n');
  return `<h4 class="visually-hidden">Offers:</h4>
  <ul class="event__selected-offers">
  ${someOffers}
  </ul>`;
};

const createSiteWayPointTemplate = waypoint => {
  const pointDate = waypoint.dateFrom;
  const pointDateEnd = waypoint.dateTo;
  const pointType = waypoint.type;
  const pointCity = waypoint.destination.name;
  const pointPrice = waypoint.basePrice;
  const pointOffers = waypoint.offers.offers;
  return `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointDate, 'YYYY-MM-DD')}">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointDate, 'MMM D')}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${pointType}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${pointType} ${pointCity}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointDate, 'YYYY-MM-DDTHH:mm')}">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointDate, 'HH:mm')}</time>
            &mdash;
            <time class="event__end-time" datetime="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointDateEnd, 'YYYY-MM-DDTHH:mm')}">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointDateEnd, 'HH:mm')}</time>
          </p>
          <p class="event__duration">${(0,_tools__WEBPACK_IMPORTED_MODULE_1__.getInterval)(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointDate).diff(pointDateEnd, 'm'))}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${pointPrice}</span>
        </p>
        ${createSiteOffersTemplate(pointOffers)}
        <button class="event__favorite-btn ${waypoint.isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`;
};

var _waypoint = /*#__PURE__*/new WeakMap();

var _clickHandler = /*#__PURE__*/new WeakMap();

var _favoriteHandler = /*#__PURE__*/new WeakMap();

class SiteWayPointView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(waypoint) {
    super();

    _classPrivateFieldInitSpec(this, _waypoint, {
      writable: true,
      value: null
    });

    _defineProperty(this, "setClickHandler", callback => {
      this._callback.click = callback;
      this.element.querySelector('.event__rollup-btn').addEventListener('click', _classPrivateFieldGet(this, _clickHandler));
    });

    _classPrivateFieldInitSpec(this, _clickHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.click();
      }
    });

    _defineProperty(this, "setFavoriteHandler", callback => {
      this._callback.favoriteClick = callback;
      this.element.querySelector('.event__favorite-btn').addEventListener('click', _classPrivateFieldGet(this, _favoriteHandler));
    });

    _classPrivateFieldInitSpec(this, _favoriteHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.favoriteClick();
      }
    });

    _classPrivateFieldSet(this, _waypoint, waypoint);
  }

  get template() {
    return createSiteWayPointTemplate(_classPrivateFieldGet(this, _waypoint));
  }

}

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ "./node_modules/nanoid/index.dev.js":
/*!******************************************!*\
  !*** ./node_modules/nanoid/index.dev.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet),
/* harmony export */   "random": () => (/* binding */ random)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

if (true) {
  if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative' &&
    typeof crypto === 'undefined'
  ) {
    throw new Error(
      'React Native does not have a built-in secure random generator. ' +
        'If you don’t need unpredictable IDs use `nanoid/non-secure`. ' +
        'For secure IDs, import `react-native-get-random-values` ' +
        'before Nano ID.'
    )
  }
  if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') {
    throw new Error(
      'Import file with `if (!window.crypto) window.crypto = window.msCrypto`' +
        ' before importing Nano ID to fix IE 11 support'
    )
  }
  if (typeof crypto === 'undefined') {
    throw new Error(
      'Your browser does not have secure random generator. ' +
        'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'
    )
  }
}
let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, size, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * size) / alphabet.length)
  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))
  while (size--) {
    let byte = bytes[size] & 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}



/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _presenter_trip_presenter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presenter/trip-presenter.js */ "./src/presenter/trip-presenter.js");
/* harmony import */ var _mockData_Waypoint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mockData/Waypoint.js */ "./src/mockData/Waypoint.js");


const waypointsNum = 17;
const waypoints = Array.from({
  length: waypointsNum
}, () => (0,_mockData_Waypoint_js__WEBPACK_IMPORTED_MODULE_1__.getPoint)());
const tripPresenter = new _presenter_trip_presenter_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
tripPresenter.init(waypoints);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map