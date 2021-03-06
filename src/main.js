import TripPresenter from './presenter/trip-presenter.js';
import { getPoint } from './mockData/Waypoint.js';

const waypointsNum = 17;
const waypoints = Array.from({ length: waypointsNum }, () => getPoint());

const tripPresenter = new TripPresenter();
tripPresenter.init(waypoints);
