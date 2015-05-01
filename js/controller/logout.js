console.log('logout.js loaded');

slideController.controller('logoutController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {

	$scope.error = '';

	$http.get(urlApi + '/logout')
	.success(function(data, status) {
		$cookies.usr_token = '';
		//$location.path('/welcome');
		console.log('Logout:: Success');
	})
	.error(function(data, status) {
		$scope.error = status + " / " + data.message;
		// REMOVE
		console.log('Logout:: error');
	});

}]);
