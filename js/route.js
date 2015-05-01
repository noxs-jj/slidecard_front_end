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
	when('/account', {
		templateUrl: 'html/account.html',
		controller: 'accountController',
		controllerAs: 'account'
	}).
	when('/register', {
		templateUrl: 'html/register.html',
		controller: 'registerController',
		controllerAs: 'register'
	}).
	when('/cardList', {
		templateUrl: 'html/cardList.html',
		controller: 'cardListController',
		controllerAs: 'cardList'
	}).
	when('/cardCreate', {
		templateUrl: 'html/cardCreate.html',
		controller: 'cardCreateController',
		controllerAs: 'cardCreate'
	}).
	when('/welcome', {
		templateUrl: 'html/welcome.html',
		controller: 'welcomeController',
		controllerAs: 'welcome'
	}).
	otherwise({ redirectTo: '/welcome' });
}]);


slideApp.controller('contentController', ['$cookies', '$scope', function($cookies, $scope) {
	var content = this;

	$scope.isLog = function() {
		if ($cookies.usr_token !== '')
			return 1;
		return 0;
	};
}]);


slideApp.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        console.log("PROVIDER");
    }
]);