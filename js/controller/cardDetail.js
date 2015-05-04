console.log('CardDetail.js loaded');

slideController.controller('cardDetailController', ['$scope', '$http', '$cookies', '$location', '$routeParams',
	function($scope, $http, $cookies, $location, $routeParams) {
		if (!$cookies.usr_token)
			$location.path('/login');

		$scope.error = '';

		console.log($routeParams.id)

		$http.get(urlApi + '/card/' + $routeParams.id)
			.success(function(data, status) {
				console.log(status + ' Account success');
				console.log(data);
			})
			.error(function(data, status) {
				$scope.error = status + ' / ' + data.message;
			})
}]);
