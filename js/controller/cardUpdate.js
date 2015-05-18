slideController.controller('cardUpdateController',
		['$scope', '$http', '$cookies', '$location', '$routeParams',
		function($scope, $http, $cookies, $location, $routeParams) {

	if (!$cookies.usr_token)
		$location.path('/login');
	else {
		$scope.error = '';
		$scope.cdn = urlCdn;
		$http.get(urlApi + '/card/' + $routeParams.id + '?token=' + $cookies.usr_token)
			.success(function(data) {
				console.log('update get spe card success');
				$scope.card = data.data;
				console.log(data);
			})
			.error(function(data, status) {
				console.log(error);
				$scope.error = $scope.error + " | update get spe card failed";
				console.log(data);
			})
		// TEMPLATE LIST
		$http.get(urlApi + '/template?token=' + $cookies.usr_token)
			.success(function(data) {
			$scope.templates = data;
		})
		.error(function(data, status) {
			$scope.error = $scope.error + " | cardUpdate get templates failed";
		})
		// FONTS LIST
		$http.get(urlApi + '/fonts?token=' + $cookies.usr_token)
		.success(function(data) {
			$scope.fonts = data.data;
		})
		.error(function(data, status) {
			$scope.error = $scope.error + " | cardUpdate get fonts failed";
		})
		$scope.update = function() {
			$http.post(
				urlApi + '/card/update/' + $routeParams.id + '?token=' + $cookies.usr_token, {
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
				})
			.success(function(data) {
				$location.path('/cardList');
			})
			.error(function(data, status) {
				$scope.error = $scope.error + " | Update Card Failed";
			})
		}
	}
}]);
