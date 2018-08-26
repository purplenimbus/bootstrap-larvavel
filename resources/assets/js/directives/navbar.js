'use strict';
/**
 * @ngdoc directive
 * @name jsonarApp.directive:navbar
 * @description
 * # customers
 */
angular.module('jsonarApp')
	.directive('navbar', function () {
		var template = 	'<nav class="navbar navbar-dark bg-primary">';
			template += '	<div class="container">';
  			template +=	'		<a class="navbar-brand text-capitalize" href="#">customer directory</a>';
    		template += '		<form class="form-inline">';
    		template += '		<button class="btn btn-outline-light my-2 my-sm-0 text-uppercase" ng-click="logout()" ng-if="loggedin">logout {{ user.username }}</button>';
    		template += '		</form>';
    		template += '	</div>';
  			template +=	'</nav>';

		return {
			template: template,
			scope : true,
			controller : ($scope,$auth,$localStorage,authdata,$rootScope,$state) => {
				console.log('navbar',$rootScope,$localStorage);
				$scope.loggedin = $auth.isAuthenticated();
				$scope.user = $scope.loggedin ? JSON.parse($localStorage.auth) : false;
				$scope.logout = () => {
					$auth.logout();
					authdata.clearUser();
					$state.go('/login');
				}

			},
			restrict: 'E',
			link: function postLink(scope, element) {			
				element.on('$destroy', function () {
					scope.$destroy();
				});
			}
		};
	});
