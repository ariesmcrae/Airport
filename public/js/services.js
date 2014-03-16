var airlineService = angular.module('airlineService', ['ngResource']);

airlineService.factory('airportFactory', airportFactory);

function airportFactory($resource) {
	return $resource('/airports/:airportCode');	
}


airlineService.factory('flightFactory', flightFactory);

function flightFactory($resource) {
	return $resource('/flights');
}
