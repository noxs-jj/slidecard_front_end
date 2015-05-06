console.log('CardUpdate.js loaded');

slideController.controller('cardUpdateController',
		['$scope', '$http', '$cookies', '$location', '$routeParams',
		function($scope, $http, $cookies, $location, $routeParams) {
	if (!$cookies.usr_token)
		$location.path('/login');
	else {
		$scope.error = '';
		//console.log($routeParams.id)
		$http.get(urlApi + '/card/update/' + $routeParams.id)
			.success(function(data, status) {
				console.log(status + ' Card Update Success');
				console.log(data);
			})
			.error(function(data, status) {
				$scope.error = status + ' / ' + data.message;
				console.log(status + ' Card Update Failed');
			})
	}
}]);