var axios = require('axios');

var ENDPOINT_BASE = "http://api.openweathermap.org/data/2.5/weather?zip=";
var ENDPOINT_TAIL=",us&appid=afdc024aed50c8ad058f77c7329ae89e";

var helpers = {

	getWeatherInfo: function(city){
		return axios.get(ENDPOINT_BASE + city + ENDPOINT_TAIL)
	}

}


module.exports = helpers;