console.log('CardDetail.js loaded');

slideController.controller('cardDetailController',
		['$scope', '$http', '$cookies', '$location', '$routeParams',
		function($scope, $http, $cookies, $location, $routeParams) {
	if (!$cookies.usr_token)
		$location.path('/login');
	else {
		$scope.error = '';
		console.log($routeParams.id)
		$http.get(urlApi + '/card/' + $routeParams.id + '?token=' + $cookies.usr_token)
			.success(function(data, status) {
				console.log(status + ' Card Info Success');
				$scope.data = data.data;
				console.log($scope);
			})
			.error(function(data, status) {
				$scope.error = status + ' / ' + data.message;
				console.log(status + ' Card Info Failed');
			})
	}
}]);
