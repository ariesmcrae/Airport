var airlineServices = angular.module('airlineServices', ['ngResource']);

airlineServices.factory('airportFactory', airportFactory);

function airportFactory($resource) {
	return $resource('/airports');	
}



