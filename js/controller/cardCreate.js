slideController.controller('cardCreateController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {

	if (!$cookies.usr_token)
		$location.path('/login');
	else {
		$scope.error = '';
		$scope.cdn = urlCdn;
		$scope.indexTEmplate = 0;

		// TEMPLATE LIST
		$http.get(urlApi + '/template?token=' + $cookies.usr_token)
			.success(function(data) {
			$scope.templates = data.data;
			if ($scope.templates == undefined || $scope.templates == '')
				$location.path('/templateCreate');
		})
		.error(function(data, status) {
			$scope.error = data.message;
		})

		// Get Index
		$scope.getIndexTemplate = function(template_id) {
			var index = 0,
			templatesLen = $scope.templates.length;

			while (index < templatesLen) {
				if ($scope.templates[index].id == template_id)
					$scope.indexTEmplate = index;
				index++;
			}
		}

		// FONTS LIST
		$http.get(urlApi + '/fonts?token=' + $cookies.usr_token)
		.success(function(data) {
			$scope.fonts = data.data;
		})
		.error(function(data, status) {
			$scope.error = data.message;
		})

		// CREATE CARD POST
		$scope.create = function() {
			console.log('create 0');
			if ($scope.type == undefined)
				$scope.type = 0;
			$scope.color = $scope.color.substring(1, 7);
			if ($scope.id_template == undefined) {
				$scope.id_template = $scope.templates[0].id;
			}
			$http.post(urlApi + '/card/create?token=' + $cookies.usr_token, {
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
				$location.path('/cardList');
			})
			.error(function(data, status) {
				$scope.error = data.message;
			})
		}
	}
}]);
