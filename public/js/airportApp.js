var airportApp = angular.module('airportApp', [])

airportApp.config(airlineRouter);

function airlineRouter($routeProvider) {
	$routeProvider
		.when('/', {templateUrl:'partials/destinations.html',
			        controller:'DestinationsCtrl'})

	    .when('/flights', {template:'<h3>Flights</h3> {{airports | json}}', 
	    	               controller: 'FlightsCtrl'})

	    .when('/reservations', {template: '<h3>Your Reservations</h3> {{airports | json}}', 
	    	                    controller: 'ReservationsCtrl'}
	);
}


