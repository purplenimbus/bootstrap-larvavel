
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.angular = require('angular');

require('angular-route');
require('angular-animate');
require('angular-sanitize');
require('ngstorage');
require('sweetalert');
require('satellizer');


angular.module('jsonarApp', [
		'ngAnimate',
		'ngSanitize',
		'ngRoute',
		'ngStorage',
		'satellizer',
	])
	.config(function($routeProvider,$authProvider) {
		$authProvider.baseUrl = '';//customer.host;
		$authProvider.loginUrl = '/api/v1/login';
    	$routeProvider
	    .when('/', {
	        templateUrl : 'js/views/main.html',
	        controller : 'MainCtrl'
	    })
	    .when('/login', {
	        templateUrl : 'js/views/login.html',
	        controller : 'AuthCtrl'
	    });
	});
