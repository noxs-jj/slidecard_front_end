console.log('welcome.js loaded');

slideController.controller('welcomeController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {

	$scope.error = '';
	if ($cookies.logged == undefined)
		$cookies.logged == false;
	console.log($cookies.logged);
	if ($cookies.usr_token != undefined && $cookies.usr_token != '') {
		$http.get(urlApi + '/account?token=' + $cookies.usr_token)
		.success(function(data, status) {
			$scope.firstname = data.data.firstname;
			$scope.lastname = data.data.lastname;
			$cookies.user_id = $scope.id;
			$scope.cdn = urlCdn;
		})
		.error(function(data, status) {
			$scope.error = status + ' / ' + data.message;
		})
	}
}]);
