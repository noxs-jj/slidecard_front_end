console.log("config.js loaded");
//
// Set API url
//
var	urlApi = 'http://api.slidecard.ovh/v1';

var slideController = angular.module('slideController',[]);

var slideApp = angular.module('slideApp',
	['ngRoute', 'ngCookies', 'slideController', 'file-model']);
