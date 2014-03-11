var app = angular.module('app', ['airlineServices']);
	
app.config(airlineRouter);

function airlineRouter($routeProvider) {
	$routeProvider
		.when('/', 
				{templateUrl: 'partials/destinations.html',
				 controller: 'destinationsCtrl'})

		 .when('/airports/:airportCode', {
			 	templateUrl: 'partials/airport.html',
			 	controller: 'airportCtrl'})

		.when('/flights', 
				{template: '<h3>Flights</h3> {{airports | json}}',
				 controller: 'flightsCtrl'})

		 .when('/reservations', 
				 {template: '<h3>Your Reservations</h3> {{airports | json}}',
			 	  controller: 'reservationsCtrl'});
}