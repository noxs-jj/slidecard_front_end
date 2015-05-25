slideController.controller('collectionMapCardController',
		['$cookies', '$location',
		function($cookies, $location) {

	$("body").removeClass('bgblue');
	var mapcard = this;

	if (!$cookies.usr_token)
		$location.path('/login');

	var latlng = new google.maps.LatLng($location.search().lat, $location.search().lng);
	var optionsGmaps = { center:latlng, mapTypeId: google.maps.MapTypeId.ROADMAP, zoom: 15, disableDefaultUI: true };
	var map = new google.maps.Map(document.getElementById("map"), optionsGmaps);
	var marker = new google.maps.Marker({ position: latlng, map: map, title:"You got this card here" });
	map.panTo(latlng);
}]);
