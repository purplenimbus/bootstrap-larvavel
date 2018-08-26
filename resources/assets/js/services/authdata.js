'use strict';

/**
 * @ngdoc service
 * @name nimbusEmsApp.auth
 * @description
 * # auth
 * Service in the jsonarApp.
 */
angular.module('jsonarApp')
	.service('authdata',function($localStorage,$rootScope,$auth,$http){
		this.login = (creds) => {
			return $auth.login(creds);
		};

		this.clearUser = () => {
			delete $localStorage.auth;
			delete $rootScope.user;
			delete $http.defaults.headers.common.Authorization;
		};

		this.setUser = (user) => {
    		$localStorage.auth = JSON.stringify(user);
    		$rootScope.user = user || false;
    	};

	});