console.log('route.js loaded');

var slideApp = angular.module('slideApp',
	['ngRoute', 'ngCookies', 'slideController']);

slideApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
	when('/login', {

		templateUrl: 'html/login.html',
		controller: 'loginController',
		controllerAs: 'login'
	}).
	when('/logout', {

		templateUrl: 'html/logout.html',
		controller: 'logoutController',
		controllerAs: 'logout'
	}).
	when('/welcome', {

		templateUrl: 'html/welcome.html',
		controller: 'welcomeController',
		controllerAs: 'welcome'
	}).
	otherwise({ redirectTo: '/welcome' });
}]);


slideApp.controller('contentController', ['$cookies', function($cookies) {
	var content = this;

	content.isLog = function() {
		return $cookies.usr_token;
	};
}]);


slideApp.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        delete $httpProvider.defaults.headers.common['Content-Type'];
        console.log("PROVIDER");
    }
]);
console.log("awdfaafdsa");