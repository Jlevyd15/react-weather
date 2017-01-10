var React = require('react');

function puke(object) {
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

var Weather = React.createClass({

	render: function() {
		console.log(this.props)
		return (
			<div>
				<h1>Hello from Weather!</h1>
				<p>{puke(this.props)}</p>
			</div>
		)
	}
})

module.exports = Weather;