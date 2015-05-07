console.log('login.js loaded');

slideController.controller('loginController', ['$scope', '$http', '$cookies', '$location',
							function($scope, $http, $cookies, $location) {
	$scope.error = '';

	$scope.auth = function() {
		$http.post(urlApi + '/auth', {
			'email': $scope.email,
			'password': $scope.password
		})
		.success(function(data, status) {
			$cookies.usr_token = data['data'].token;
			console.log('Login success');
			console.log($cookies.usr_token);

			$location.path('/welcome');
		})
		.error(function(data, status) {
			// REMOVE
			console.log('Login error');
			//$scope.error = status + " / " + data.message;
			console.log(data);
		})
		// REMOVE
		console.log($scope.email + " / " + $scope.password);
	};
}]);

// test@test.test
// test

// jquilez@student.42.fr
// jquilez
