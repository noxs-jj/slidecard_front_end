console.log('Account.js loaded');

slideController.controller('accountController', ['$scope', '$http', '$cookies', '$location',
	function($scope, $http, $cookies, $location) {
		if (!$cookies.usr_token)
			$location.path('/login');

		$scope.error = '';

		$http.get('http://slidecard.tk/v1/account')
			.success(function(data, status) {
				console.log(status + ' Account success');
				$scope.firstname = data.data.firstname;
				$scope.lastname = data.data.lastname;
				$scope.email = data.data.email;
				$scope.avatar = data.data.avatar;
				$scope.lastLogin = data.data.last_login;
				$scope.card_hash = data.data.card_hash;
				$scope.id = data.data.id;
				$cookies.user_id = $scope.id;
			})
			.error(function(data, status) {
				$scope.error = status + ' / ' + data.message;
			})
}]);

// jquilez@student.42.fr
// jquilez

// {
//         "id": 3,
//         "id_rights": 1,
//         "card_hash": "4069261055",
//         "active": true,
//         "firstname": "Julien",
//         "lastname": "Quilez",
//         "avatar": null,
//         "email": "jquilez@student.42.fr",
//         "last_login": "2015-05-04 15:21:35.763917",
//         "api_token": "Y3kXED2dX96LICoR9BGZ4ugdgTcyvwu6jPO.CxHnhHW3agjgo8ZGG",
//         "created_at": "2015-04-30 14:50:04",
//         "updated_at": "2015-05-04 15:21:35"
//     }