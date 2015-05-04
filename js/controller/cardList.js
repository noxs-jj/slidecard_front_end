console.log('cardList.js loaded');

slideController.controller('cardListController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {
	if (!$cookies.usr_token)
		$location.path('/login');

	$scope.error = '';
	$http.get(urlApi + '/cards')
	.success(function(data, status) {
		console.log(status + 'CardList success');
		$scope.result = data.data;
	})
	.error(function(data, status) {
		$scope.error = status + ' / ' + data.message;
	})
}]);

// jquilez@student.42.fr
// jquilez

        //    {"id": 1,
        //     "hash_code": "040d111186a3402318675fdca03fd95dfc56998dbf5e88dbacd4400f81ace82e",
        //     "owned_by": 3,
        //     "type": 2,
        //     "id_font": 1,
        //     "organization": "SlideCard inc",
        //     "job": "Software Engineer",
        //     "location": "Paris",
        //     "email": "contact@slidecard.io",
        //     "phone": "01.43.12.32.43",
        //     "slogan": "Update your Business card to 21 century!",
        //     "id_template": 1,
        //     "color": "FFFFFF",
        //     "deleted_at": null,
        //     "created_at": "2015-04-30 14:50:04",
        //     "updated_at": "2015-04-30 14:50:04",
        //     "font": {
        //         "id": 1,
        //         "name": "Arial",
        //         "path": "/",
        //         "created_at": "2015-04-30 14:50:04",
        //         "updated_at": "2015-04-30 14:50:04"
        //     },
        //     "template": {
        //         "name": "WebDev your style",
        //         "path": "/assets",
        //         "price": "3.99"
        //     }
        // }