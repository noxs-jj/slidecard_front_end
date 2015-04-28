console.log("js/routes.js loaded");

var slideApp = angular.module('slideRoutes', ['ngRoute', 'ngCookies', 'slideControllers']);


slideApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
		when('/welcome', {
			templateUrl: 'html/welcome.html',
			controller: 'welcomeController',
			controllerAs: 'login'
		}).



		when('/login', {
			templateUrl: 'html/login.html',
			controller: 'loginController',
			controllerAs: 'login'
		}).



		otherwise({
			redirectTo: '/login'
		});
}]);