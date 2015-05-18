slideController.controller('templateCreateController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {

	if (!$cookies.usr_token)
		$location.path('/login');
	else {
		$scope.error = '';
		$scope.token = $cookies.usr_token;
		$scope.url = 'http://api.slidecard.ovh/v1/template/create?token=' + $cookies.usr_token;
		$scope.create = function() {
			var fd = new FormData();

			fd.append("name", $scope.name);
			fd.append("type", 0);
			fd.append("background", $scope.background);
			fd.append("price", 0);

			console.log($scope.background.type);

			if ($scope.background.size >= 2097152) {
				$scope.error = "File must be < to 2 Mo";
			}
			else if ($scope.background.type != 'image/png'
						&& $scope.background.type != 'image/jpeg'
						&& $scope.background.type != 'image/gif') {
				$scope.error = "File must be:  .png  /  .jpeg  /  .gif";
			}
			else {
				$http.post(urlApi + '/template/create?token=' + $cookies.usr_token,
					fd, {
						headers: {'Content-Type': undefined },
						transformRequest: angular.identity
					}
				)
				.success(function(data) {
					$location.path('/template');
				})
				.error(function(data, status) {
					$scope.error = data.message;
				})
			}
		}
	}
}]);
