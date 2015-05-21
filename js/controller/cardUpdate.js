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
				$scope.card = data.data;
			})
			.error(function(data, status) {
				$scope.error = data.message;
			})
		// TEMPLATE LIST
		$http.get(urlApi + '/template?token=' + $cookies.usr_token)
		.success(function(data) {
			$scope.templates = data;
		})
		.error(function(data, status) {
			$scope.error = data.message;
		})
		// FONTS LIST
		$http.get(urlApi + '/fonts?token=' + $cookies.usr_token)
		.success(function(data) {
			$scope.fonts = data.data;
		})
		.error(function(data, status) {
			$scope.error = data.message;
		})
		$scope.update = function() {
			if ($scope.color == undefined)
				$scope.color = $scope.card.color;
			else
				$scope.color = $scope.color.substring(1, 7);
			if ($scope.type == undefined)
				$scope.type = $scope.card.type;
			if ($scope.id_template == undefined)
				$scope.id_template = $scope.card.template.id;
			if ($scope.id_font == undefined)
				$scope.id_font = $scope.card.id_font;
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
				$scope.error = data.message;
			})
		}
	}
}]);
