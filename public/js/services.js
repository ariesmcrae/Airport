var airlineService = angular.module('airlineService', ['ngResource']);

airlineService.factory('airportFactory', airportFactory);

function airportFactory($resource) {
	return $resource('/airports/:airportCode');	
}



