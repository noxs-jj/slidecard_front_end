console.log('cardList.js loaded');

slideController.controller('cardListController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {
	if (!$cookies.usr_token)
		$location.path('/login');

	$scope.error = '';

	$http.get(urlApi + '/cards')

	.success(function(data, status) {
		console.log('CardList success');
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