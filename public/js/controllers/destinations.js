app.controller(destinationsCtrl);

function destinationsCtrl($scope, airportFactory) {
	$scope.setActive('destinations');

	$scope.sidebarURL = 'partials/airport.html';
	$scope.currentAirport = null;

	$scope.showClickedAirport = function(code) {
		$scope.currentAirport = airportFactory.get({airportCode: code});
	};
	
	$scope.airports = airportFactory.query();
}


