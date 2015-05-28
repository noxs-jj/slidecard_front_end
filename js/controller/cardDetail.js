slideController.controller('cardDetailController',
		['$scope', '$http', '$cookies', '$location', '$routeParams',
		function($scope, $http, $cookies, $location, $routeParams) {

	if (!$cookies.usr_token) {
		$location.path('/login');
	}
	else {
		$scope.error = '';
		$scope.cdn = urlCdn;
		$http.get(urlApi + '/card/' + $routeParams.id + '?token=' + $cookies.usr_token)
		.success(function(data, status) {
			$scope.data = data.data;
		})
		.error(function(data, status) {
			$scope.error = data.message;
		});
	}
}]);
