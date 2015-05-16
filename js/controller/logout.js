console.log('logout.js loaded');

slideController.controller('logoutController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {

	$scope.error = '';
	if ($cookies.usr_token != '') {
		$http.get(urlApi + '/logout?token=' + $cookies.usr_token)
		.success(function(data, status) {
			$cookies.usr_token = '';
			$location.path('/welcome');
			console.log('Logout:: Success');
		})
		.error(function(data, status) {
			$scope.error = status + " / " + data.message;
			// REMOVE
			console.log('Logout:: error');
		});
		$cookies.usr_token = undefined;
		$location.path('/welcome');
	}
}]);

// jmoiroux@student.42.fr