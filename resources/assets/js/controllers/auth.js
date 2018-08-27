'use strict';

/**
 * @ngdoc function
 * @name jsonarApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the jsonarApp
 */
angular.module('jsonarApp')
 	.controller('AuthCtrl', ($scope,$auth,authdata,$rootScope,$state,$location) => {
 		$scope.bodyId = 'login';
 		$scope.loading = $scope.error = false;
 		$scope.login = (creds) => {

 			$scope.loading = true;
 			$scope.error = false;

 			authdata.login(creds)
 				.then((result) => {
 					$scope.loading = false;

 					if(result.data.user){ authdata.setUser(result.data.user); }

 					$state.go('/customers');
 				})
 				.catch((error) => {
 					$scope.loading = false;
 					$scope.error = error;
 					console.log('login error',error);
 				});
 		}
 	});
