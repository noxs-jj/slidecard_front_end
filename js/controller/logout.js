console.log('logout.js loaded');

slideController.controller('logoutController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {

	if ($cookies.usr_token) {
		console.log('Logout Token NULL');
		$location.path('/welcome');
	}

	$http.get(urlApi + '/logout');

	$cookies.usr_token = null;
	console.log('Logout Success');
	$location.path('/welcome');
}]);
