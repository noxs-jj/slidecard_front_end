slideController.controller('contactListController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {

	if (!$cookies.usr_token)
		   $location.path('/login');
	else {
		$scope.error = '';
		$scope.cdn = urlCdn;

		$http.get(urlApi + '/collection?token=' + $cookies.usr_token)
		.success(function(data, status) {
			$scope.result = data.data;
		})
		.error(function(data, status) {
			$scope.error = data.message;
		})

		// $scope.isPresent = function(id_own) {
		// 	var i = 0,
		// 	len = $scope.result.length;

		// 	while (i < len) {
		// 		if ($scope.result)
		// 		i++;
		// 	}
		// 	return false;
		// }
	}
}]);
