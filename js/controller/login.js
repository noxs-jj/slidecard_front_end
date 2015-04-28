console.log("js/controller/login.js loaded");

slideControllers.controller('loginController', ['$http', '$cookies', '$location', function($http, $cookies, $location) {

	var login = this;

	login.error = "";

	if ($cookies.usr_token)
		$location.path('/account');

	login.auth = function() {

		$http.post('http://slidecard.tk/v1/auth', {

			'email': login.mail,
			'password': login.pass
		}).success(function(data) {

			$cookies.usr_token = data['data'].token;
			$location.path('/account');
		}).error(function(error) {

			console.log(error);
			login.error = "Bad login / pass";
		});
	};
}]);
