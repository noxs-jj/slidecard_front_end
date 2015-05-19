slideController.controller('cardCreateController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {

	if (!$cookies.usr_token)
		$location.path('/login');
	else {
		$scope.error = '';
		$scope.cdn = urlCdn;

		// TEMPLATE LIST
		$http.get(urlApi + '/template?token=' + $cookies.usr_token)
			.success(function(data) {
			$scope.templates = data.data;
			console.log($scope.templates);
		})
		.error(function(data, status) {
			$scope.error = $scope.error + " | cardCreate get templates failed";
		})


		// FONTS LIST
		$http.get(urlApi + '/fonts?token=' + $cookies.usr_token)
		.success(function(data) {
			$scope.fonts = data.data;
		})
		.error(function(data, status) {
			$scope.error = $scope.error + " | cardCreate get fonts failed";
		})

		// CREATE CARD POST
		$scope.create = function() {
			if ($scope.type == undefined)
				$scope.type = 0;
			if ($scope.id_template == undefined)
			$http.post(urlApi + '/card/create?token=' + $cookies.usr_token, {
					'organization': $scope.organization,
					'job': $scope.job,
					'location': $scope.location,
					'email': $scope.email,
					'phone': $scope.phone,
					'slogan': $scope.slogan,
					'color': $scope.color,
					'font': $scope.id_font,
					'template': $scope.id_template,
					'type': $scope.type
				}
			)
			.success(function(data) {
				$location.path('/cardList');
			})
			.error(function(data, status) {
				$scope.error = data.message;
			})
		}
	}
}]);
