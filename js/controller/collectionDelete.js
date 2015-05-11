console.log('collectionDelete.js loaded');

slideController.controller('collectionDeleteController',
		['$scope', '$http', '$cookies', '$location', '$routeParams',
		function($scope, $http, $cookies, $location, $routeParams) {

	if (!$cookies.usr_token)
		   $location.path('/login');
	else {
		$scope.error = '';
		// $http.get(urlApi + '/collection/delete/' + $routeParams.id + '?token=' + $cookies.usr_token)
		// .success(function(data, status) {
		// 	console.log(status + ' CollectionDelete success');
		// 	$location.path('/collection');
		// })
		// .error(function(data, status) {
		// 	$scope.error = status + ' / ' + data.message;
		// 	console.log(data);
		// })
		$scope.delete = function() {
			$http.get(urlApi + '/collection/delete/' + $routeParams.id
				+ '?token=' + $cookies.usr_token)
			.success(function(data, status) {
				console.log(status + ' CollectionDelete success');
				$location.path('/collection');
			})
			.error(function(data, status) {
				$scope.error = status + ' / ' + data.message;
				console.log(data);
			})
		}
	}
}]);
