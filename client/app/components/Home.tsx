import React, { useEffect, useState, useMemmo } from 'react';
import { Link } from 'react-router'

import { fetchWeather } from '../helpers/fetchWeather'
import { DomEvent, IResult, IUseForm } from '../helpers/types'

import './Home.less'

const useForm = (callback?: any): IUseForm => {
	const [inputs, setInputs] = useState({});
	const [result, setResult] = useState();
	// TODO: 
	// - validate input
	// - hide api key
	const handleFormSubmit = (event: DomEvent) => {
		if (event) event.preventDefault();
		// Make the call to the wather API
		fetchWeather(inputs.zipcode)
			.then(resData => {
				setResult(result => {
					console.log(resData)
					return ({ ...result, ...resData })
				})
				callback()
			})
	}

	const handleInputChange = (event: DomEvent) => {
		event.persist();
		setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
	}

	return {
		handleFormSubmit,
		handleInputChange,
		inputs,
		result
	}
}

const Home = (props: object) => {
	console.log(props)

	const { result, inputs, handleInputChange, handleFormSubmit } = useForm();

	return (
		<div className="home-container__center">
			<div>

				<h1>Enter a zipcode</h1>
				<form type="submit" onSubmit={handleFormSubmit}>
					<input name="zipcode" type="text" placeholder="zipcode"
						value={inputs.zipcode}
						onChange={handleInputChange}>
					</input>
					<button type="submit">Get Weather</button>
				</form>
				{result && <div>
					<h1>{result.name}</h1>
					<h3>{result.weather[0].description}</h3>
					<h3>Current Temp: {result.main.temp}
						<img style={{ verticalAlign: 'middle' }} src={`http://openweathermap.org/img/w/${result.weather[0].icon}.png`} />
					</h3>
					<h4>Wind Speed: {result.wind.speed} mph</h4>
					<table>
						<tbody>
							<tr>
								<th>Low</th>
								<th>High</th>
							</tr>
							<tr>
								<td>{result.main.temp_min}</td>
								<td>{result.main.temp_max}</td>
							</tr>
						</tbody>
					</table>
				</div>
				}
			</div>
		</div>
	)
}

export default Home