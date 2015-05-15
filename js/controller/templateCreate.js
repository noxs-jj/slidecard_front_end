console.log('templateCreate.js loaded');

slideController.controller('templateCreateController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {

	if (!$cookies.usr_token)
		$location.path('/login');
	else {
		$scope.error = '';
		console.log("debugg 0");
		$scope.token = $cookies.usr_token;
		$scope.url = 'http://api.slidecard.ovh/v1/template/create?token=' + $cookies.usr_token;

		$scope.create = function() {
			console.log("debugg 1");
			console.log($scope.background);
			var fd = new FormData();

			fd.append("name",$scope.name);
			fd.append("type",0);
			fd.append("background",$scope.background);
			fd.append("price",0);
			 $http.post(urlApi + '/template/create?token=' + $cookies.usr_token,
			 	fd, {
					headers: {'Content-Type': undefined },
					transformRequest: angular.identity
				}
			)
			.success(function(data) {
				console.log('TEmplate Create success');
				$location.path('/template');
			})
			.error(function(data, status) {
				$scope.error = $scope.error + " | TEmplate Create Failed";
				console.log($scope.error);
				console.log(data.data);
			})
		}
		console.log("debugg 2");
	}
}]);
