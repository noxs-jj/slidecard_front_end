console.log('CardUpdate.js loaded');

slideController.controller('cardUpdateController',
		['$scope', '$http', '$cookies', '$location', '$routeParams',
		function($scope, $http, $cookies, $location, $routeParams) {

	if (!$cookies.usr_token)
		$location.path('/login');
	else {
		$scope.error = '';
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
				console.log('Update Card success');
				$location.path('/cardList');
			})
			.error(function(data, status) {
				console.log(error);
				$scope.error = $scope.error + " | Update Card Failed";
				console.log(data);
			})
		}
	}
}]);
