var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Home = React.createClass({
	render: function() {
		console.log(this.props)
		return (
			<div>
				<h1>Hello From Home!</h1>
				<form type="submit" onSubmit={this.props.onSubmitWeather}>
					<input type="text" placeholder="test" 
						value={this.props.weather}
						onChange={this.props.onUpdateWeather}>
					</input>
						<button type="submit">Get Weather</button>
				</form>
			</div>
		)
	}
})

module.exports = Home;