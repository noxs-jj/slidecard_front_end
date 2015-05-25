//
// Set API url
//
var	urlApi = 'http://api.slidecard.ovh/v1';

var urlCdn = 'http://cdn.slidecard.ovh';

var slideController = angular.module('slideController',[]);

var user_lat = 0.0;

var user_lng = 0.0;

var errorGeo;

var slideApp = angular.module('slideApp',
	['ngRoute', 'ngCookies', 'slideController', 'file-model', 'mp.colorPicker']);
