//This is the parent controller. It has child controllers such as airport, destinations, flights, reservations.
app.controller(appCtrl);

function appCtrl($scope) {
	$scope.setActive = function(type) {
		$scope.destinationsActive = '';
		$scope.flightsActive = '';
		$scope.reservationsActive = '';

		$scope[type + 'Active'] = 'active';
	};
}