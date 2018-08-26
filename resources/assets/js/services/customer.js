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

		this.customersTemplate = () => {
			var str = '',
				cardBody = '';

			str += '<div ng-if="loading">loading</div>';
			str += '<div>';
			str += '	<div class="row">';
			str += '		<div class="col-3" ng-if="!customers.data.length && !loading">no customers found</div>';
			str += '		<div class="col-3" ng-if="customers.data.length">';
			str += 	bootstrap4.listLink({
						loop:'<a class="list-group-item list-group-item-action" ng-class="selectedCustomer.customerNumber === customer.customerNumber ? \'active\' : \'\' " ng-repeat="customer in customers.data" ng-click="view(customer)">{{customer.customerName}}</a>'
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
			var str = '',
				orderBody = '';

			str += '<article ng-if="loadingOrder">loading orders</article>';
			str += '<article ng-if="selectedCustomer.orders.data.length && !loadingOrder">';

			str += '<div class="row">';
			str += '<h6 class="text-center text-capitalize">orders</h6>';
			str += '</div>';
			str += '<div class="row">';
			str += '<div class="col-md-4 col-sm-6" ng-repeat="order in selectedCustomer.orders.data">';
			
			orderBody += '<h6 class="card-subtitle mb-2 text-muted">order date : {{order.orderDate}}</h6>';
			orderBody += '<h6 class="card-subtitle mb-2 text-muted">required by : {{order.requiredDate}}</h6>';
			orderBody += '<h6 class="card-subtitle mb-2 text-muted">shipped date : {{order.shippedDate}}</h6>';
			orderBody += '';	

			str += 	bootstrap4.card({
						header:'<h5 class="card-title">{{order.orderNumber}}</h5>',
						body:orderBody,
						class:'bg-light mb-3',
					});
			str += '</div>';
			str += '</div>';
			str += '</aritcle>';

			return str;
		}
	});