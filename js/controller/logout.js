slideController.controller('logoutController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {

	$scope.error = '';
	if ($cookies.usr_token != '' && $cookies.usr_token != undefined) {
		$http.get(urlApi + '/logout?token=' + $cookies.usr_token)
		.success(function(data, status) {
			$cookies.usr_token = '';
			$location.path('/welcome');
		})
		.error(function(data, status) {
			$scope.error = status + " / " + data.message;
		});
		$cookies.usr_token = undefined;
		$location.path('/welcome');
	}
}]);
