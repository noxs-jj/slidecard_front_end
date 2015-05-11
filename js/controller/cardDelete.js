console.log('CardDelete.js loaded');

slideController.controller('carddeleteController',
		['$scope', '$http', '$cookies', '$location', '$routeParams',
		function($scope, $http, $cookies, $location, $routeParams) {

	if (!$cookies.usr_token)
		$location.path('/login');
	else {
		$scope.error = '';
		$http.get(urlApi + '/card/delete/' + $routeParams.id + '?token=' + $cookies.usr_token)
			.success(function(data) {
				console.log('Card Delete success');
				$scope.templates = data;
				console.log(data);
			})
			.error(function(data, status) {
				console.log(error);
				$scope.error = $scope.error + " | Card Delete failed";
				console.log(data);
			})
	}
}]);
