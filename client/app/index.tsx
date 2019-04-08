import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes'

const render = (Component) => {
	ReactDOM.render(
	<Component />,
	document.getElementById('app')
	)
}
// render(App)
if (module.hot) {
	module.hot.dispose(function () {
		// module is about to be replaced
	})
	
	module.hot.accept(function () {
		// module or one of its dependencies was just updated
		render(App)
	})
}