console.log('route.js loaded');

slideApp.config(['$routeProvider', '$httpProvider',
				function ($routeProvider, $httpProvider) {
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
	when('/templateCreate', {
		templateUrl: 'html/templateCreate.html',
		controller: 'templateCreateController',
		controllerAs: 'templateCreate'
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
	when('/card/delete/:id', {
		templateUrl: 'html/cardDelete.html',
		controller: 'cardDeleteController',
		controllerAs: 'cardDelete'
	}).
	when('/card/:id', {
		templateUrl: 'html/cardDetail.html',
		controller: 'cardDetailController',
		controllerAs: 'cardDetail'
	}).
	when('/card/update/:id', {
		templateUrl: 'html/cardUpdate.html',
		controller: 'cardCreateController',
		controllerAs: 'cardUpdate'
	}).
	when('/collection', {
		templateUrl: 'html/collectionList.html',
		controller: 'collectionListController',
		controllerAs: 'collectionList'
	}).
	when('/collection/delete/:id', {
		templateUrl: 'html/collectionDelete.html',
		controller: 'collectionDeleteController',
		controllerAs: 'collectionDelete'
	}).
	when('/welcome', {
		templateUrl: 'html/welcome.html',
		controller: 'welcomeController',
		controllerAs: 'welcome'
	}).
	otherwise({ redirectTo: '/welcome' });

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

//	Y3kXED2dX96LICoR9BGZ4unoFv9NRlR9uPQQkva.klxifeZT5Bru6

slideApp.controller('contentController',
		['$cookies', '$scope', '$location',
		function($cookies, $scope, $location) {

	$scope.isLog = function() {
		if ($cookies.usr_token == '')
			return 0;
		return 1;
	};
}]);
