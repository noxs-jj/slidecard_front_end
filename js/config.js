console.log("config.js loaded");
//
// Set API url
//
var	urlApi = 'http://slidecard.tk/v1';

var slideController = angular.module('slideController',[]);

var slideApp = angular.module('slideApp',
	['ngRoute', 'ngCookies', 'slideController']);

slideApp.config(['$httpProvider', function($httpProvider) {
		$httpProvider.defaults.useXDomain = true;
		$httpProvider.defaults.withCredentials = true;
		
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
		console.log("PROVIDER");
	}
]);