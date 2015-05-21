slideController.controller('templateListController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {

	if (!$cookies.usr_token)
		   $location.path('/login');
	else {
		$scope.error = '';
		$scope.cdn = urlCdn;
		$http.get(urlApi + '/template?token=' + $cookies.usr_token)
		.success(function(data, status) {
			$scope.result = data.data;
			console.log($scope.result);
		})
		.error(function(data, status) {
			$scope.error = data.message;
		})
	}
}]);
