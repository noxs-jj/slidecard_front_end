console.log('route.js loaded');

(function() {

	var app = angular.module('slideApp',
		['ngRoute', 'ngCookies', 'welcomeController']);

	app.config(['$routeProvider', function ($routeProvider) {

		$routeProvider.
			when('/login', {

				templateUrl: 'html/login.html',
				controller: 'loginController',
				controllerAs: 'login'
			}).
			when('/welcome', {

				templateUrl: 'html/welcome.html',
				controller: 'welcomeController',
				controllerAs: 'welcome'
			}).
			otherwise({ redirectTo: '/welcome' });
	}]);

	app.controller('contentController', ['$cookies', function($cookies) {

		var content = this;

		content.isLog = function() {

			return $cookies.usr_token;
		};
	}]);
})();