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
  			template +=	'		<a class="navbar-brand" href="#">Navbar</a>';
  			template += '		<span class="navbar-text">';
      		template += '		{{user.username || \'\'}}';
    		template += '		</span>';
    		template += '		<form class="form-inline">';
    		template += '		<button class="btn btn-outline-danger my-2 my-sm-0" ng-click="logout()">logout</button>';
    		template += '		</form>';
    		template += '	</div>';
  			template +=	'</nav>';

		return {
			template: template,
			restrict: 'E'
		};
	});
