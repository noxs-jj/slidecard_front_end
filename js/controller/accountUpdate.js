console.log('acountUpdate.js loaded');

slideController.controller('accountUpdateController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {

	if (!$cookies.usr_token)
		$location.path('/login');
	else {
		$scope.error = '';
		$scope.cdn = urlCdn;

		$http.get('http://slidecard.tk/v1/account?token=' + $cookies.usr_token)
			.success(function(data, status) {
				console.log(status + ' Account success');
				$scope.firstname = data.data.firstname;
				$scope.lastname = data.data.lastname;
				$scope.email = data.data.email;
				$scope.avatar = data.data.avatar;
				$scope.lastLogin = data.data.last_login;
				$scope.card_hash = data.data.card_hash;
				$scope.id = data.data.id;
			})
			.error(function(data, status) {
				$scope.error = status + ' / ' + data.message;
			})
		$scope.update = function() {
			if ($scope.update_password == $scope.retype_password) {
				console.log('again password SUCCESS test');
				var fd = new FormData();



				fd.append("email",$scope.email);
				fd.append("firstname",$scope.update_firstname);
				fd.append("lastname",$scope.update_lastname);
				fd.append("avatar",$scope.update_url_avatar);

				var passLength = new String($scope.update_password).length;

				if (passLength > 0)
					fd.append("password",$scope.update_password);

				$http.post(
					urlApi + '/account/update?token=' + $cookies.usr_token,
				 	fd, {
						headers: {'Content-Type': undefined },
						transformRequest: angular.identity
					}
				)
				.success(function(data) {
					$cookies.usr_token = data['data'].token;
					console.log('Account Update success');
					$location.path('/account');
				})
				.error(function(data, status) {
					console.log(error);
					$scope.error = "Account Update Failed";
				})




			}
			else {
				$scope.error = 'Passwords doesn\'t matchs, try again';
				console.log('again password FAILED test');
			}

		//REMOVE
		console.log(
			$scope.firstname + " / " +
			$scope.lastname + " / " +
			$scope.email + " / " +
			$scope.retypeEmail + " / " +
			$scope.password);
		}
	}
}]);
