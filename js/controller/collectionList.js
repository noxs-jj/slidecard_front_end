console.log('collectionList.js loaded');

slideController.controller('collectionListController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {

	if (!$cookies.usr_token)
		   $location.path('/login');
	else {
		$scope.error = '';
		$http.get(urlApi + '/collection?token=' + $cookies.usr_token)
		.success(function(data, status) {
			console.log(status + ' CardList success');
			$scope.result = data.data;
		})
		.error(function(data, status) {
			$scope.error = status + ' / ' + data.message;
			console.log(data);
		})
	}
}]);
