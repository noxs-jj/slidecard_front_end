console.log('register.js loaded');

slideController.controller('registerController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {

	console.log('blabla');

	var register = this;

	register.error = '';

	register.auth = function() {
		console.log('register.js debugg 0');
		$http.post(urlApi + '/register', {
			'email': register.email,
			'password': register.password,
			'firstname': register.firstname,
			'lastname': register.lastname
		})
		.success(function(data) {
			console.log('register success');
			$cookies.usr_token = data['data'].token;
			// console.log('register success');
			// $location.path('/welcome');
		})
		.error(function(data, status) {
			// REMOVE
			console.log('register error');
			console.log('status: ' + status);
			console.log(data);
			register.error = "Register Failed";
		})
		console.log('register.js debugg 3');
		// REMOVE
		console.log(
			register.firstname + " / " +
			register.lastname + " / " +
			register.email + " / " +
			register.retypeEmail + " / " +
			register.password);
	}
}]);
