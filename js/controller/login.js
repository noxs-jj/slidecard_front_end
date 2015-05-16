console.log('login.js loaded');

slideController.controller('loginController',
		['$scope', '$http', '$cookies', '$location',
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
			$location.path('/cardList');
			location.reload();
		})
		.error(function(data, status) {
			// REMOVE
			console.log('Login error');
			$scope.error = data.message;
			console.log(data);
		})
		// REMOVE
		console.log($scope.email + " / " + $scope.password);
	};
}]);
