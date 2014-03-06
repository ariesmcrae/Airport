app.controller(airportCtrl);

function airportCtrl ($scope, $routeParams) {
	$scope.currentAirport = $scope.airports[$routeParams.airportCode];
}