//This is the parent module. We're injecting airlineService here so that 
//destination.js can use the airlineService's airportFactory.

var app = angular.module('app', ['airlineService']);
	
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
				{templateUrl: 'partials/flights.html',
				 controller: 'flightsCtrl'})

		 .when('/reservations', 
				 {template: '<h3>Your Reservations</h3> {{airports | json}}',
			 	  controller: 'reservationsCtrl'});
}