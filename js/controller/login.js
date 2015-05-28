 slideController.controller('loginController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {

	$scope.error = '';
	$scope.auth = function() {

		$http.post(urlApi + '/auth', {
			'email': $scope.email,
			'password': $scope.password
		})
		.success(function(data, status) {
			$cookies.usr_token = data['data'].token;
			$cookies.logged = true;
			if (window.location.hostname == '192.168.59.103')
				window.location.assign('http://' + window.location.hostname + ':' + window.location.port + '/#/cardList');
			else
				window.location.assign('http://' + window.location.hostname + '/#/cardList');
			window.location.reload();
		})
		.error(function(data, status) {
			$scope.error = data.message;
		});
	};
}]);
