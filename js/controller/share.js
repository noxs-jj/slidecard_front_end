slideController.controller('shareController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {

	$scope.error = '';
	$scope.success = '';
	$scope.cdn = urlCdn;

	$http.get(urlApi + '/cards?token=' + $cookies.usr_token)
	.success(function(data, status) {
		$scope.cards = data.data;
	})
	.error(function(data, status) {
		$scope.error = data.message;
	})

	$scope.selectCard = function(key_card) {
		$scope.cardToSend = key_card;
	}

	$scope.sendCard = function() {
		$scope.error = '';
		$scope.success = '';
		if ($scope.cardToSend == undefined) {
			console.log('Mo Card Selected');
			$scope.error = 'No Card Selected';
			return;
		}
		console.log('sending: ' + $scope.cardToSend);
		$http.post(urlApi + '/share' + '?token=' + $cookies.usr_token, {
			'card_hash': $scope.userToShare,
			'hash_code': $scope.cardToSend,
			'lat': 0,
			'lng': 0
		})
		.success(function(data, status) {
			$scope.success = 'Share Sucess';
		})
		.error(function(data, status) {
			$scope.error = data.message;
		})
	}
}]);
