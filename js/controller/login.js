console.log('login.js loaded');

slideController.controller('loginController',
	['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {

	var login = this;

	$scope.test = "test login 42";

	login.auth = function() {
		$http.post(urlApi + '/auth', {
			'email': login.email,
			'password': login.password
		})
		.success(function(data) {
			$cookies.usr_token = data['data'].token;
			console.log('Login success');
			$location.path('/welcome');
		})
		.error(function(error) {
			console.log(error);
			login.error = "Bad login / pass";
		})
		// REMOVE
		console.log(login.email + " / " + login.password);
	}
	// REMOVE
	console.log(urlApi + '/auth');
}]);

// jquilez@student.42.fr
// jquilez