slideController.controller('accountController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {

	if (!$cookies.usr_token)
		$location.path('/login');
	else {
		$scope.error = '';
		$scope.cdn = urlCdn;
		$http.get(urlApi + '/account?token=' + $cookies.usr_token)
		.success(function(data, status) {
			$scope.firstname = data.data.firstname;
			$scope.lastname = data.data.lastname;
			$scope.email = data.data.email;
			$scope.avatar = data.data.avatar;
			$scope.lastLogin = data.data.last_login;
			$scope.card_hash = data.data.card_hash;
			$scope.id = data.data.id;
			$scope.accept_news = data.data.accept_news;
			$scope.accept_notif = data.data.accept_notif;
			$cookies.user_id = $scope.id;

		})
		.error(function(data, status) {
			$scope.error = status + ' / ' + data.message;
		})
	}
}]);
