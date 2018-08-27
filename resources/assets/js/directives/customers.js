'use strict';
/**
 * @ngdoc directive
 * @name jsonarApp.directive:customers
 * @description
 * # customers
 */
angular.module('jsonarApp')
	.directive('customers', function (customer) {			
		return {
			scope:true,
			controller : function($scope,customer,bootstrap4,alert,$compile,modal){				
				$scope.loading = $scope.loadingOrder = $scope.selectedCustomer = false;

				$scope.init = function(){	
					$scope.loading = true;
					customer.getCustomers()
						.then((result) => {
							$scope.loading = false;
							$scope.customers = result.data;
							$scope.view($scope.customers.data[0]);
						})
						.catch((error) => {
							$scope.loading = false;
							//do something
							console.log('getCustomers error',error);
						});
				};
					

				$scope.view = (c) => {

					//console.log('view',c);
					
					$scope.selectedCustomer = c;
					$scope.loadingOrder = true;
					customer.getOrders(c.customerNumber)
					.then((result) => {
						$scope.selectedCustomer.orders = result.data;
						$scope.loadingOrder = false;
						//console.log('customer order',result);
					})
					.catch((error) => {
						//show pop up
						console.log('getOrders error',error);
						$scope.loadingOrder = false;
					});
				}

				$scope.details = (order,key) => {

					var loop = '',
						body = '';

						//console.log('details',order,key);

					loop += '<li class="uk-clearfix list-group-item" ng-repeat="(key,value) in selectedCustomer.orders.data['+key+'].details.product">';
					loop += '<div class="float-left text-uppercase text-muted">{{ key }}</div>';
					loop += '<div class="float-right">{{ value }}</div>';
					loop += '</li>';

					/*body += bootstrap4.address({
								title:'{{selectedCustomer.customerName}}',
								street:'{{selectedCustomer.addressLine1}} {{selectedCustomer.addressLine2}}',
								city:'{{selectedCustomer.city}}',
								state:'{{selectedCustomer.state}} , {{selectedCustomer.country}}',
								phone:'{{selectedCustomer.phone}}'
							});*/

					body += bootstrap4.list({
						ul_class:'class="list-group list-group-flush"',
						loop : loop
					});

					modal.modal({
						title:'{{\'product details\' | uppercase }}',
						body:body
					},$scope).then(() => {});
		
				}

								
				$scope.init();
				
			},

			template: customer.customersTemplate(),
			restrict: 'E',
			link: function postLink(scope, element) {			
				element.on('$destroy', function () {
					scope.$destroy();
				});
			}
		};
	});
