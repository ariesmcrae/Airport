app.controller(flightsCtrl);

function flightsCtrl ($scope) {
	$scope.setActive('flights');
	$scope.airports = {};
}