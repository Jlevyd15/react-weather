var React = require('react');
var Home = require('../components/Home');

var HomeContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			weather: ''
		}
	},
	handleUpdateWeather: function(e) {
		//when user changes text in the field, capture that and set it to weather state
		this.setState({
			weather: e.target.value
		})
	},
	handleSubmitWeather: function(e) {
		//when the submit button is clicked save the state of the input field
		//reset it after user click
		e.preventDefault();
		var weather = this.state.weather;
		this.setState({
			weather: ''
		})

		if(this.state.weather !== "") {
			this.context.router.push({pathname: '/weather/'+this.state.weather})
		}
	},
	render: function() {
		return (
			<div>
				<h1>Hello from HomeContainer!</h1>
				<Home
					username={this.username}
					onUpdateWeather={this.handleUpdateWeather}
					onSubmitWeather={this.handleSubmitWeather} />
			</div>
		)
	}
})

module.exports = HomeContainer;