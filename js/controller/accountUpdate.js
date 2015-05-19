slideController.controller('accountUpdateController',
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
		})
		.error(function(data, status) {
			$scope.error = data.message;
		})
		$scope.update = function() {
			$scope.error = '';
			if ($scope.update_password == $scope.retype_password) {
				var fd = new FormData();

				if ($scope.update_url_avatar != undefined && $scope.update_url_avatar != '') {
					if ($scope.update_url_avatar.size >= 2097152) {
						$scope.error = "File must be < to 2 Mo";
					}
					else if ($scope.update_url_avatar.type != 'image/png'
								&& $scope.update_url_avatar.type != 'image/jpeg'
								&& $scope.update_url_avatar.type != 'image/gif') {
						$scope.error = "File must be:  .png  /  .jpeg  /  .gif";
					}
					else {
						fd.append("avatar", $scope.update_url_avatar);
					}
				}
				if ($scope.email != undefined)
					fd.append("email", $scope.email);
				if ($scope.update_firstname != undefined)
					fd.append("firstname", $scope.update_firstname);
				if ($scope.update_lastname != undefined)
					fd.append("lastname", $scope.update_lastname);
				if ($scope.update_password != undefined && $scope.update_password != '')
					fd.append("password", $scope.update_password);
				if ($scope.update_accept_news == undefined) {
					if ($scope.accept_news == true)
						$scope.update_accept_news = 1;
					else
						$scope.update_accept_news = 0;
				}
				if ($scope.update_accept_notif == undefined) {
					if ($scope.accept_notif == true)
						$scope.update_accept_notif = 1;
					else
						$scope.update_accept_notif = 0;
				}
				fd.append("newsletters", $scope.update_accept_news);
				fd.append("notifications", $scope.update_accept_notif);
				if ($scope.error == '') {
					$http.post(
						urlApi + '/account/update?token=' + $cookies.usr_token,
					 	fd, {
							headers: {'Content-Type': undefined },
							transformRequest: angular.identity
						}
					)
					.success(function(data) {
						$location.path('/account');
					})
					.error(function(data, status) {
						$scope.error = data.message;
					})
				}
			}
			else
				$scope.error = 'Passwords doesn\'t matchs, try again';
		}
	}
}]);
