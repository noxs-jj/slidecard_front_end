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
	when('/account/settings', {
		templateUrl: 'html/settings.html',
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
	when('/template/delete/:id', {
		templateUrl: 'html/templateDelete.html',
		controller: 'templateDeleteController',
		controllerAs: 'templateDelete'
	}).
	when('/share', {
		templateUrl: 'html/share.html',
		controller: 'shareController',
		controllerAs: 'share'
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
		controller: 'cardUpdateController',
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
	when('/contactList', {
		templateUrl: 'html/contactList.html',
		controller: 'contactListController',
		controllerAs: 'contactList'
	}).
	when('/welcome', {
		templateUrl: 'html/welcome.html',
		controller: 'welcomeController',
		controllerAs: 'welcome'
	}).
	when('/application', {
		templateUrl: 'html/applications.html',
		controller: 'welcomeController',
		controllerAs: 'welcome'
	}).
	otherwise({ redirectTo: '/welcome' });

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

slideApp.controller('contentController',
		['$cookies', '$scope', '$location',
		function($cookies, $scope, $location) {
			var content = this;

	content.panel = {login: false, register: false};

	content.getPanel = function (name) {

		if (this.panel.login && name == 'login')
			return true;

		if (this.panel.register && name == 'register')
			return true;

		return false;
	};

	content.setPanel = function (name) {

		if (name == 'login')
		{
			content.panel.login = true;
			content.panel.register = false;
		}

		if (name == 'register')
		{
			content.panel.login = false;
			content.panel.register = true;
		}
		console.log("set: " + name);
	};

	content.isPage = function (page) {

		for (var i = 0; i < page.length; i++)
		{
			if (page[i] == $location.path())
				return true;
		}
		return false;
	};

	$scope.isLog = function() {
		if ($cookies.usr_token == '' || $cookies.usr_token == undefined)
			return 0;
		return 1;
	};
}]);
