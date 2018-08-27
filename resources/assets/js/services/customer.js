'use strict';

/**
 * @ngdoc service
 * @name nimbusEmsApp.customerService
 * @description
 * # customerService
 * Service in the jsonarApp.
 */
angular.module('jsonarApp')
	.service('customer',function($http,bootstrap4){

		this.host = 'http://127.0.0.1:8000/';

		this.getCustomers = () => {
			return $http.get('api/v1/customers');
		}

		this.getOrders = (customerNumber) => {
			return $http.get('api/v1/orders?customerNumber='+customerNumber);
		}

		this.parseOrderTable = (orders,keys) => {
			var result = {};

			orders.forEach((key) => {
				console.log('parseOrderTable',key);
			});

			return result;
		}

		this.customersTemplate = () => {
			var str = '',
				cardBody = '';

			str += '<spinner ng-if="loading"></spinner>';
			str += '<div>';
			str += '	<div class="row">';
			str += '		<div class="col-3" ng-if="!customers.data.length && !loading">no customers found</div>';
			str += '		<div class="col-3" ng-if="customers.data.length">';
			str +=	bootstrap4.search({attributes:'ng-model="search"'});
			str += 	bootstrap4.listLink({
						loop:'<a class="list-group-item list-group-item-action" ng-class="selectedCustomer.customerNumber === customer.customerNumber ? \'active text-white font-weight-bold\' : \'\' " ng-repeat="customer in customers.data | filter:search" ng-click="view(customer)">{{customer.customerName}}</a>'
					});
			str += '		</div>';
			str += '		<div class="col-9" ng-if="!selectedCustomer && customers.data.length">select a customer</div>';
			str += '		<div class="col-9" ng-if="selectedCustomer && !loading">';

			var detailCard = bootstrap4.address({
				title:'{{selectedCustomer.customerName}}',
				street:'{{selectedCustomer.addressLine1}} {{selectedCustomer.addressLine2}}',
				city:'{{selectedCustomer.city}}',
				state:'{{selectedCustomer.state}} , {{selectedCustomer.country}}',
				phone:'{{selectedCustomer.phone}}'
			});

			detailCard += bootstrap4.contact({
				title:'{{selectedCustomer.contactFirstName}} {{selectedCustomer.contactLastName}}',
			});

			detailCard += this.customersDetails();

			str += 	bootstrap4.card({
						body : detailCard
					});
			str += '		</div>';
			str += '	</div>';
			str += '</div>';
			return str;
		}

		this.customersDetails = () => {
			var str = '';

			str += '<spinner ng-if="loadingOrder"></spinner>';
			str += '<article ng-if="selectedCustomer.orders.data.length && !loadingOrder">';

			str += '<div class="row">';
			str += '</div>';
			str += '<div class="row">';

			str += 	bootstrap4.table('selectedCustomer.orders.data');

			//str += '</div>';
			str += '</div>';
			str += '</aritcle>';

			return str;
		}
	});