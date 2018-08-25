'use strict';

/**
 * @ngdoc service
 * @name nimbusEmsApp.customerService
 * @description
 * # customerService
 * Service in the jsonarApp.
 */
angular.module('jsonarApp')
	.service('customer',function($http){

		this.host = 'http://127.0.0.1:8000/';

		this.getCustomers = () => {
			return $http.get('api/v1/customers');
		}

		this.getOrders = (customerNumber) => {
			return $http.get('api/v1/orders?customerNumber='+customerNumber);
		}


	});