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
				$location.path('/welcome');
			})
			.error(function(data, status) {
				$scope.error = "Register Failed";
			})	
		}
		else if ($scope.email_again != $scope.email) {
			$scope.error = "Emails don't matchs";
		}
		else if ($scope.password != $scope.retype_password) {
			$scope.error = "Passwords don't match";
		}
	}
}]);
