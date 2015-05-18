slideController.controller('collectionDeleteController',
		['$scope', '$http', '$cookies', '$location', '$routeParams',
		function($scope, $http, $cookies, $location, $routeParams) {

	if (!$cookies.usr_token)
		   $location.path('/login');
	else {
		$scope.error = '';
		$scope.delete = function() {
			$http.get(urlApi + '/collection/delete/' + $routeParams.id
				+ '?token=' + $cookies.usr_token)
			.success(function(data, status) {
				console.log(status + ' CollectionDelete success');
				$location.path('/collection');
			})
			.error(function(data, status) {
				$scope.error = data.message;
			})
		}
	}
}]);
