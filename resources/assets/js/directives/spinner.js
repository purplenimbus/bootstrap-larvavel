'use strict';
/**
 * @ngdoc directive
 * @name jsonarApp.directive:spinner
 * @description
 * # customers
 */
angular.module('jsonarApp')
	.directive('spinner', function () {			
		return {
			template: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>',
			//template:'show spinner',
			restrict: 'E'
		};
	});
