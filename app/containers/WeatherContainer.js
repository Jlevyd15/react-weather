var React = require('react');
var Weather = require('../components/Weather');
var weatherHelpers = require('../utils/WeatherHelpers');

var WeatherContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			isLoading: true,
			weatherInfo: []
		}
	},
	componentDidMount: function() {
		var query = this.props.params.test;
		//fetch info from weather api and update the state
		weatherHelpers.getWeatherInfo(query)
		.then(function(weatherData) {
			this.setState({
				isLoading: false,
				weatherData: weatherData
			})
		}.bind(this))
	},
	render: function() {
		console.log(this.props)
		return (
			<div>
				<h1>Hello from WeatherContainer!</h1>
				<Weather 
					weatherData={this.state.weatherData}
					isLoading={this.state.isLoading} />
			</div>
		)
	}
})

module.exports = WeatherContainer;