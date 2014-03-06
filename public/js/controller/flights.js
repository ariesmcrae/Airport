airportApp.controller(FlightsCtrl);

function FlightsCtrl($scope) {
	$scope.setActive('flights');
	
	$scope.airports = {};
}