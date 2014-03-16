app.controller(flightsCtrl);

function flightsCtrl ($scope, flightFactory) {
	$scope.setActive('flights');
	$scope.flights = flightFactory.query();
}