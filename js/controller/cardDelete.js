slideController.controller('cardDeleteController',
		['$scope', '$http', '$cookies', '$location', '$routeParams',
		function($scope, $http, $cookies, $location, $routeParams) {

	if (!$cookies.usr_token)
		$location.path('/login');
	else {
		$scope.error = '';
		$scope.delete = function() {
			$http.get(urlApi + '/card/delete/' + $routeParams.id + '?token=' + $cookies.usr_token)
			.success(function(data) {
				$scope.templates = data;
				$location.path('/cardList');
			})
			.error(function(data, status) {
				$scope.error = data.message;
			})
		}
	}
}]);
