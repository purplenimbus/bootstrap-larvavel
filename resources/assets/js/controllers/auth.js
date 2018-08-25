'use strict';

/**
 * @ngdoc function
 * @name jsonarApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the jsonarApp
 */
angular.module('jsonarApp')
 	.controller('AuthCtrl', ($scope,$auth,authdata,$rootScope) => {
 		$scope.loading = false;
 		$scope.login = (creds) => {

 			$scope.loading = true;

 			authdata.login(creds)
 				.then((result) => {
 					$scope.loading = false;

 					if(result.data.user){ authdata.setUser(result.data.user); }

 					console.log('login result',result,$rootScope);
 				})
 				.catch((error) => {
 					$scope.loading = false;
 					console.log('login error',error);
 				});
 		}
 	});
