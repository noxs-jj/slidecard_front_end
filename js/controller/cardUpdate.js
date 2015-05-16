console.log('CardUpdate.js loaded');

slideController.controller('cardUpdateController',
		['$scope', '$http', '$cookies', '$location', '$routeParams',
		function($scope, $http, $cookies, $location, $routeParams) {

	if (!$cookies.usr_token)
		$location.path('/login');
	else {
		$scope.error = '';
		$scope.cdn = urlCdn;
		$http.get(urlApi + '/card/' + $routeParams.id + '?token=' + $cookies.usr_token)
			.success(function(data) {
				console.log('update get spe card success');
				$scope.card = data.data;
				console.log(data);
			})
			.error(function(data, status) {
				console.log(error);
				$scope.error = $scope.error + " | update get spe card failed";
				console.log(data);
			})

		// TEMPLATE LIST
		$http.get(urlApi + '/template?token=' + $cookies.usr_token)
			.success(function(data) {
			console.log('cardUpdate get templates success');
			$scope.templates = data;
			console.log(data);
		})
		.error(function(data, status) {
			console.log(error);
			$scope.error = $scope.error + " | cardUpdate get templates failed";
			console.log(data);
		})

		// FONTS LIST
		$http.get(urlApi + '/fonts?token=' + $cookies.usr_token)
		.success(function(data) {
			console.log('cardUpdate get fonts success');
			$scope.fonts = data.data;
			console.log($scope.fonts);
		})
		.error(function(data, status) {
			console.log(error);
			$scope.error = $scope.error + " | cardUpdate get fonts failed";
			console.log(data);
		})

		$scope.update = function() {
			$http.post(
				urlApi + '/card/update/' + $routeParams.id + '?token=' + $cookies.usr_token, {
					'organization': $scope.organization,
					'job': $scope.job,
					'location': $scope.location,
					'email': $scope.email,
					'phone': $scope.phone,
					'slogan': $scope.slogan,
					'color': $scope.color,
					'id_font': $scope.id_font,
					'id_template': $scope.id_template,
					'type': $scope.type
				})
			.success(function(data) {
				console.log('Update Card success');
				$location.path('/cardList');
			})
			.error(function(data, status) {
				console.log(error);
				$scope.error = $scope.error + " | Update Card Failed";
				console.log(data);
			})
		}
	}
}]);

// color: "15ghfd"
// created_at: "2015-05-15 13:25:37"
// deleted_at: null
// email: "zdfgadgf@dfhdfghdf"
// hash_code: "1fc806da516c276f55ba554f3af9fbaf5d9a909f08f78e83acafe1e62c0ffdbb"
// id: 11
// id_font: 1
// id_template: 1
// job: "sfghdfghdf"
// location: "France"
// organization: "Ecole 42"
// owned_by: 1
// phone: "4545"
// slogan: "fthjdghdgh"
// type: 0
// updated_at: "2015-05-15 13:25:37"
