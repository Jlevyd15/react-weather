import { Promise } from "q";
import {data} from '../mockData'

export const fetchWeather = (zipcode: string): PromiseLike<Object> => (
	// new Promise((resolve, reject) => {
	// 	fetch(`https://api.openweathermap.org/data/2.5/weather?APPID=afdc024aed50c8ad058f77c7329ae89e&zip=${zipcode}&units=imperial`)
	// 		.then(response => response.json())
	// 		.then(myJson => {
	// 			// console.log(JSON.stringify(myJson));
	// 			// if (callback) callback(myJson);
	// 			resolve(myJson)
	// 		}).catch(err => {
	// 			console.error('Error fetching weather', err)
	// 			reject(err)
	// 		});
	// })


	// TODO - remove this and uncomment the above to hit the real API
	new Promise(resolve => {
		resolve(data)
	})
)
