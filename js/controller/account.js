console.log('Account.js loaded');

slideController.controller('accountController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {
	if (!$cookies.usr_token)
		$location.path('/login');

	$scope.error = '';

	$http.get(urlApi + '/account')

	.success(function(data, status) {
		console.log('Account success');
		$scope.result = data.data;
		console.log(status);
		console.log(data.data);
	})

	.error(function(data, status) {
		$scope.error = status + ' / ' + data.message;
	})

}]);


// jquilez@student.42.fr
// jquilez