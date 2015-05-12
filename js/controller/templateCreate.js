console.log('templateCreate.js loaded');

slideController.controller('templateCreateController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {

	if (!$cookies.usr_token)
		$location.path('/login');
	else {
		$scope.error = '';
		console.log("debugg 0");
		$scope.create = function() {
			console.log("debugg 1");
			console.log($scope.background);

			$http.post(urlApi + '/template/create?token=' + $cookies.usr_token, {
					'name': $scope.name,
					'type': $scope.type,
					'background': $scope.background,
					'price': $scope.price,
				}
			)
			.success(function(data) {
				console.log('TEmplate Create success');
				$location.path('/template');
			})
			.error(function(data, status) {
				console.log(error);
				$scope.error = $scope.error + " | TEmplate Create Failed";
				console.log(data);
			})
		}
		console.log("debugg 2");
	}
}]);

//type, nom, chemin, price