'use strict';

/**
 * @ngdoc service
 * @name nimbusEmsApp.bootstrap
 * @description
 * # bootstrap
 * Service in the jsonarApp.
 */
angular.module('jsonarApp')
	.factory('bootstrap4',function(){
		return {
			input : (attrs) => {

			var str = '<input ';
				str += attrs.attributes ? attrs.attributes : 'type="text"';
				str += ' >';

			return str;
			},
			list : (attrs) => {

			var str = '<ul ';
				str += attrs.ul_class ? attrs.ul_class : 'class="list-group"';
				str += ' >';
				str += attrs.loop ? attrs.loop : '';
				str += '</ul>';

				return str;
			},
			formBuilder : (attrs) => {

			var form = '<form>';

				form += '</form>';
				return form;

			},
			card : () => {
				
			}
		};
	});