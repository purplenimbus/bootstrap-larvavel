'use strict';
/**
 * @ngdoc directive
 * @name jsonarApp.directive:customers
 * @description
 * # customers
 */
angular.module('jsonarApp')
	.directive('customers', function () {			
		return {
			scope:true,
			controller : function($scope,customer,bootstrap4){				
				$scope.init = function(){
					
					customer.getCustomers()
						.then((result) => {
							$scope.customers = result.data;
						})
						.catch((error) => {
							//show pop up
							console.log('getCustomers error',error);
						});
				};

				$scope.getOrders = (customer) => {

					customer.getOrders(customer.customerNumber)
						.then((result) => {
							customer.order = result.data;
						})
						.catch((error) => {
							//show pop up
							console.log('getOrders error',error);
						});
				}
								
				$scope.init();

				console.log('customers',$scope,bootstrap4);
				
			},

			template: '{{ customers }}',
			restrict: 'E',
			link: function postLink(scope, element) {			
				element.on('$destroy', function () {
					scope.$destroy();
				});
			}
		};
	});
