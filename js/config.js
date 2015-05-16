console.log("config.js loaded");
//
// Set API url
//
var	urlApi = 'http://api.slidecard.ovh/v1';

var urlCdn = 'http://cdn.slidecard.ovh';

var slideController = angular.module('slideController',[]);

var slideApp = angular.module('slideApp',
	['ngRoute', 'ngCookies', 'slideController', 'file-model']);
