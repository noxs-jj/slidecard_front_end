console.log('cardCreate.js loaded');

slideController.controller('cardCreateController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {
	if (!$cookies.usr_token)
		$location.path('/login');

	$scope.error = '';

	$scope.create = function() {
		$http.post(urlApi + '/card/create', {
			'organization': $scope.organization,
			'job': $scope.job,
			'location': $scope.newLocation,
			'email': $scope.email,
			'phone': $scope.phone,
			'slogan': $scope.slogan,
			'color': $scope.newColor,


			'firstname': $scope.firstname,
			'lastname': $scope.lastname
		})
		.success(function(data) {
			console.log('newCard success');
		})
		.error(function(data, status) {
			console.log(error);
			$scope.error = "newCard Failed";
		})
	}
}]);

// owned_by (int)
// type (smallint)
// id_font (int)
// id_template (int)
