slideController.controller('templateDeleteController',
		['$scope', '$http', '$cookies', '$location', '$routeParams',
		function($scope, $http, $cookies, $location, $routeParams) {

	if (!$cookies.usr_token)
		   $location.path('/login');
	else {
		$scope.error = '';
		$scope.cdn = urlCdn;
		$http.get(urlApi + '/template/' + $routeParams.id + '?token=' + $cookies.usr_token)
		.success(function(data, status) {
			$scope.result = data.data.template;
			console.log($scope.result);
		})
		.error(function(data, status) {
			$scope.error = data.message;
		})

		$scope.delete = function() {
			$http.get(urlApi + '/template/delete/' + $routeParams.id
				+ '?token=' + $cookies.usr_token)
			.success(function(data, status) {
				$location.path('/template');
			})
			.error(function(data, status) {
				$scope.error = data.message;
			})
		}
	}
}]);
