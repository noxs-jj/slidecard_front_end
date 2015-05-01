console.log('register.js loaded');

slideController.controller('registerController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {
	$scope.error = '';
	$scope.reg = function() {
		$http.post(urlApi + '/register', {
			'email': $scope.email,
			'password': $scope.password,
			'firstname': $scope.firstname,
			'lastname': $scope.lastname
		})
		.success(function(data) {
			$cookies.usr_token = data['data'].token;
			console.log('register success');
			$location.path('/welcome');
		})
		.error(function(data, status) {
			console.log(error);
			$scope.error = "Register Failed";
		})
		//REMOVE
		console.log(
			$scope.firstname + " / " +
			$scope.lastname + " / " +
			$scope.email + " / " +
			$scope.retypeEmail + " / " +
			$scope.password);
	}
}]);
