var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var HomeContainer = require('../containers/HomeContainer');
var WeatherContainer = require('../containers/WeatherContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path="weather/:weather" component={WeatherContainer} />
    </Route>
  </Router>
);

module.exports = routes;