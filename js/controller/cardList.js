console.log('cardList.js loaded');

slideController.controller('cardListController',
	['$scope', '$http', '$cookies', '$location',
	function($scope, $http, $cookies, $location) {
	// if (!$cookies.usr_token)
	// 	   $location.path('/login');
	// else {
	// 	$http.defaults.headers.common['X-CSRFToken'] = $cookies.usr_token;
		$scope.error = '';

		$http.get(urlApi + '/cards?token=' + $cookies.usr_token)






		.success(function(data, status) {
			console.log(status + ' CardList success');
			$scope.result = data.data;
		})
		.error(function(data, status) {
			$scope.error = status + ' / ' + data.message;
			console.log(data);
		})
	//}
}]);
