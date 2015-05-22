slideController.controller('contactListController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {

	if (!$cookies.usr_token)
		   $location.path('/login');
	else {
		$scope.error = '';
		$scope.cdn = urlCdn;
		$http.get(urlApi + '/collection?token=' + $cookies.usr_token)
		.success(function(data, status) {
			$scope.result = data.data;
			$scope.removeDeplucate = function arrUnique(arr) {
				var cleaned = [];
				$scope.result.forEach(function(itm) {
					var unique = true;
					cleaned.forEach(function(itm2) {
						if (itm.owner.id == itm2.owner.id)
							unique = false;
					});
					if (unique)  cleaned.push(itm);
				});
				return cleaned;
			}
			$scope.newObj = $scope.removeDeplucate($scope.result);

		})
		.error(function(data, status) {
			$scope.error = data.message;
		})
	}
}]);
