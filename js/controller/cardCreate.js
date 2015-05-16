console.log('cardCreate.js loaded');

slideController.controller('cardCreateController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {

	if (!$cookies.usr_token)
		$location.path('/login');
	else {
		$scope.error = '';
		$scope.cdn = urlCdn;

		// TEMPLATE LIST
		$http.get(urlApi + '/template?token=' + $cookies.usr_token)
			.success(function(data) {
			console.log('cardCreate get templates success');
			$scope.templates = data.data;
			console.log(data);
		})
		.error(function(data, status) {
			console.log(error);
			$scope.error = $scope.error + " | cardCreate get templates failed";
			console.log(data);
		})
		// TYPES LIST
		$http.get(urlApi + '/card/types/all?token=' + $cookies.usr_token)
		.success(function(data) {
			console.log('cardCreate get types success');
			$scope.type0 = data.data[0];
			$scope.type1 = data.data[1];
			console.log($scope.types);
		})
		.error(function(data, status) {
			console.log(error);
			$scope.error = $scope.error + " | cardCreate get types failed";
			console.log(data);
		})
		// FONTS LIST
		$http.get(urlApi + '/fonts?token=' + $cookies.usr_token)
		.success(function(data) {
			console.log('cardCreate get fonts success');
			$scope.fonts = data.data;
			console.log($scope.fonts);
		})
		.error(function(data, status) {
			console.log(error);
			$scope.error = $scope.error + " | cardCreate get fonts failed";
			console.log(data);
		})
		// CREATE CARD POST
		$scope.create = function() {
			$http.post(urlApi + '/card/create?token=' + $cookies.usr_token,
				{
					'organization': $scope.organization,
					'job': $scope.job,
					'location': $scope.location,
					'email': $scope.email,
					'phone': $scope.phone,
					'slogan': $scope.slogan,
					'color': $scope.color,
					'font': $scope.id_font,
					'template': $scope.id_template,
					'type': $scope.type
				}
			)
			.success(function(data) {
				console.log('newCard success');
				$location.path('/cardList');
			})
			.error(function(data, status) {
				console.log(error);
				$scope.error = $scope.error + " | newCard Failed";
				console.log(data);
			})
		}
	}
}]);
