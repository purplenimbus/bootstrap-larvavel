'use strict';

/**
 * @ngdoc service
 * @name nimbusEmsApp.customerui
 * @description
 * # customerui
 * Service in the jsonarApp.
 */
angular.module('jsonarApp')
	.factory('alert',function(bootstrap4,$window){
		return {
	      	alert: (attrs = {}) => {
	        	return $window.swal(attrs);
	      	},
     		button:(attrs) => {
	        	return  {
	          		text: attrs.text || '',
	          		value: attrs.value || false,
	          		visible: true,
	          		className: attrs.className || "btn btn-primary",
	          		closeModal: true
	        	};
      		}
    	};
	});