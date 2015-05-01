console.log('login.js loaded');

slideController.controller('loginController', ['$scope', '$http', '$cookies', '$location',
							function($scope, $http, $cookies, $location) {
	$scope.error = '';

	if ($cookies.usr_token) {
		console.log('Login:: Already logged');
		console.log($cookies.usr_token);
	}

	$scope.auth = function() {
		if ($cookies.usr_token) {
			$location.path('/welcome');
			console.log('Login:: Already logged');
			$location.path('/welcome');
		}
		else {
			$http.post(urlApi + '/auth', {
				'email': $scope.email,
				'password': $scope.password
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
				$scope.error = 'Bad login / pass';
			})
			// REMOVE
			console.log($scope.email + " / " + $scope.password);
		}
	}
}]);

// jquilez@student.42.fr
// jquilez