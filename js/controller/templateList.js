console.log('templateList.js loaded');

slideController.controller('templateListController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {
	if (!$cookies.usr_token)
		   $location.path('/login');
	else {
		$scope.error = '';
		$http.get(urlApi + '/templates?token=' + $cookies.usr_token)
		.success(function(data, status) {
			console.log(status + ' templateList success');
			$scope.result = data;
		})
		.error(function(data, status) {
			$scope.error = status + ' / ' + data.message;
			console.log(status + 'templateList Failed');
		})
	}
}]);
