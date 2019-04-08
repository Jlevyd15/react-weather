import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './components/Home.tsx'

const routes = () => (
	<BrowserRouter>
		<Route path="/" exact component={Home} />
	</BrowserRouter>
);

export default routes