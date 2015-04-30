console.log('login.js loaded');

slideController.controller('loginController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {
	var login = this;

	login.error = '';

	if ($cookies.usr_token) {
		console.log('Login:: Already logged');
		$location.path('/welcome');
	}

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
		.error(function(data, status) {
			// REMOVE
			console.log('Login error');
			console.log('status: ' + status);
			console.log('data: ' + data);
			login.error = "Bad login / pass";
		})
		// REMOVE
		console.log(login.email + " / " + login.password);
	}
	// REMOVE
	console.log(urlApi + '/auth');
	// REMOVE
	console.log($cookies.usr_token);
}]);

// jquilez@student.42.fr
// jquilez