console.log('Account.js loaded');

slideController.controller('accountController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {
	$scope.error = '';

	$http.get(urlApi + '/acount')

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