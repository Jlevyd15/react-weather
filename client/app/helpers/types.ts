export interface DomTarget {
	name: string,
	value: any
}
export interface DomEvent {
	target: DomTarget,
	preventDefault: () => {},
	persist: () => {}
}
export interface IUseForm {
	handleFormSubmit: any,
	handleInputChange: any,
	inputs: any,
	result: IResult
}
export interface IResult {
	coord: {
		lon: number,
		lat: number
	},
	base: string,
	name: string,
	weather: [{
		id: number,
		main: string,
		description: string,
		icon: string
	}]
	main: {
		temp: number,
		temp_min: number,
		temp_max: number,
		pressure: number,
		humidity: number,
	},
	wind: {
		speed: number,
		deg: number
	},
	clouds: {
		all: number
	},
	visibility: number,
	dt: number,
	sys: {
		type: number,
		id: number,
		message: number,
		country: string,
		sunrise: number,
		sunset: number
	},
	id: number,
	cod: number
}