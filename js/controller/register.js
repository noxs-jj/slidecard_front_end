console.log('register.js loaded');

slideController.controller('registerController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {
	$scope.error = '';
	$scope.reg = function() {
		if ($scope.password == $scope.retype_password && $scope.email_again == $scope.email) {
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
			console.log('debugg register success');			
		}
		else if ($scope.email_again != $scope.email) {
			$scope.error = "Emails don't match";
			console.log('debugg register email failed');
		}
		else if ($scope.password != $scope.retype_password) {
			$scope.error = "Passwords don't match";
			console.log('debugg register password failed');
		}
		//REMOVE
		console.log(
			$scope.firstname + " / " +
			$scope.lastname + " / " +
			$scope.email + " / " +
			$scope.retypeEmail + " / " +
			$scope.password);
	}
}]);
