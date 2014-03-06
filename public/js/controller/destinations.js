airportApp.controller(DestinationsCtrl);

function DestinationsCtrl($scope) {
	$scope.setActive('destinations');
	
	$scope.sidebarURL = 'partials/airport.html';
	$scope.formURL = 'partials/form.html';
	
	$scope.currentAirport = null;
	
	$scope.showSelectedAirport = function(code) {
		$scope.currentAirport = $scope.airports[code];
	};

	
	$scope.editAirport = function(code) {
		$scope.editing = $scope.airports[code];
	};
	
}

