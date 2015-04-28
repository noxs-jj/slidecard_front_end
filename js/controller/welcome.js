console.log('welcome.js loaded');

(function() {

	var app = angular.module('welcomeController', []);

	app.controller('welcomeController',
		['$http', '$cookies', '$location', function($http, $cookies, $location) {

		var cards = this;



		cards.test = "test 1337";
	}]);
})();
