app.controller(airportCtrl);

function airportCtrl ($scope, $routeParams, airportFactory) {
	$scope.currentAirport = airportFactory.get({airportCode: $routeParams.airportCode});
}