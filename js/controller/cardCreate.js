console.log('cardCreate.js loaded');

slideController.controller('cardCreateController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {
	if (!$cookies.usr_token)
		$location.path('/login');
	else {
		$scope.error = '';

		$scope.create = function() {
			$http.post(
				urlApi + '/card/create?token=' + $cookies.usr_token,
				{
					'organization': $scope.organization,
					'job': $scope.job,
					'location': $scope.location,
					'email': $scope.email,
					'phone': $scope.phone,
					'slogan': $scope.slogan,
					'color': $scope.color,
					'id_font': $scope.id_font,
					'id_template': $scope.id_template,
					'type': $scope.type
				}
			)
			.success(function(data) {
				console.log('newCard success');
			})
			.error(function(data, status) {
				console.log(error);
				$scope.error = "newCard Failed";
				console.log(data);
			})
		}
	}
}]);

// type, id_font, organisation, job, location, email, phone, slogan, id_template, color