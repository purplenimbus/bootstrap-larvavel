
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
require('@uirouter/angularjs');


angular.module('jsonarApp', [
		'ngAnimate',
		'ngSanitize',
		'ngRoute',
		'ngStorage',
		'satellizer',
		'ui.router'
	])
	.config(function($authProvider,$stateProvider,$urlRouterProvider) {

		$authProvider.baseUrl = '';//customer.host;
		$authProvider.loginUrl = '/api/v1/login';
		$authProvider.storageType = 'localStorage';

		function _skipAuth($q, $state, $auth) {
		  var defer = $q.defer();
		  console.log('_skipAuth',$auth.isAuthenticated());
		  if($auth.isAuthenticated()) {
		    defer.reject(); /* (1) */
		  } else {
		    defer.resolve(); /* (2) */
		  }
		  return defer.promise;
		}
		 
		function _redirectAuth($q, $state, $auth,$timeout) {
		  var defer = $q.defer();
		  console.log('_redirectAuth',$auth.isAuthenticated());
		  if($auth.isAuthenticated()) {
		    defer.resolve(); /* (3) */
		  } else {
		    $timeout(function () {
		      $state.go('/login'); /* (4) */
		    });
		    defer.reject();
		  }
		  return defer.promise;
		}

		$stateProvider
	    .state('/customers', {
	    	url : '/customers',
	        templateUrl : 'js/views/main.html',
	        controller : 'MainCtrl',
	        controllerAs : 'main',
	        resolve : {
	        	redirectAuth: _redirectAuth
	        }
	    })
	    .state('/login', {
	    	url : '/',
	        templateUrl : 'js/views/login.html',
	        controller : 'AuthCtrl',
	      	controllerAs : 'auth',
	        resolve : {
	        	skipAuth: _skipAuth
	        }
	    });
	    $urlRouterProvider.otherwise('/');
	});


