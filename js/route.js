console.log('route.js loaded');

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
	when('/account/update', {
		templateUrl: 'html/accountUpdate.html',
		controller: 'accountUpdateController',
		controllerAs: 'accountUpdate'
	}).
	when('/register', {
		templateUrl: 'html/register.html',
		controller: 'registerController',
		controllerAs: 'register'
	}).
	when('/template', {
		templateUrl: 'html/templateList.html',
		controller: 'templateListController',
		controllerAs: 'templateList'
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
	when('/card/:id', {
		templateUrl: 'html/cardDetail.html',
		controller: 'cardDetailController',
		controllerAs: 'cardDetail'
	}).
	when('/card/update/:id', {
		templateUrl: 'html/cardUpdate.html',
		controller: 'cardUpdateController',
		controllerAs: 'cardUpdate'
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
