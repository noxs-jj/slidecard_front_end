slideApp.controller('contentController',
		['$cookies', '$scope', '$location',
		function($cookies, $scope, $location) {
	
	var content = this;

	content.panel = {login: false, register: false};

	content.getPanel = function (name) {
		if (this.panel.login && name == 'login')
			return true;
		if (this.panel.register && name == 'register')
			return true;
		return false;
	};

	content.setPanel = function (name) {
		if (name == 'login') {
			content.panel.login = true;
			content.panel.register = false;
		}

		if (name == 'register') {
			content.panel.login = false;
			content.panel.register = true;
		}
		console.log("set: " + name);
	};

	content.isPage = function (page) {
		for (var i = 0; i < page.length; i++) {
			if (page[i] == $location.path())
				return true;
		}
		return false;
	};

	$scope.isLog = function() {
		if ($cookies.usr_token == '' || $cookies.usr_token == undefined)
			return 0;
		return 1;
	};

	function myPosition(position) {
		user_lat = position.coords.latitude;
		user_lng = position.coords.longitude;
		$('#geolocinfo').css('display', 'initial');

		if ($location.path() == '/account') {
			var centerpos = new google.maps.LatLng(user_lat, user_lng);
			var optionsGmaps = { center:centerpos, mapTypeId: google.maps.MapTypeId.ROADMAP, zoom: 15, disableDefaultUI: true };
			var map = new google.maps.Map(document.getElementById("map"), optionsGmaps);
			var latlng = new google.maps.LatLng(user_lat, user_lng);
			var marker = new google.maps.Marker({ position: latlng, map: map, title:"You are here" });
			map.panTo(latlng);
		}
	}

	function errorPosition(error) {
		switch (error.code) {
			case error.TIMEOUT:
				errorGeo = "Geolocation: Timeout";
				break;
			case error.PERMISSION_DENIED:
				errorGeo = "Geolocation: Permission denied";
				break;
			case error.POSITION_UNAVAILABLE:
				errorGeo = "Geolocation: Position unavailable";
				break;
			case error.UNKNOWN_ERROR:
				errorGeo = "Geolocation: Unknown error";
				break;
		}
		$('#geolocinfo').css('display', 'none');
	}

	function stopGeolocation() {
		navigator.geolocation.clearWatch(geolocId);
	}

	if (navigator.geolocation) {
		var geolocId = navigator.geolocation
			.watchPosition(myPosition, errorPosition, {maximumAge:600000});
	}
}]);
