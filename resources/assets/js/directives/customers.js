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
			controller : function($scope,customer,bootstrap4){				
				$scope.loading = $scope.loadingOrder = $scope.selectedCustomer = false;

				$scope.init = function(){	
					$scope.loading = true;
					customer.getCustomers()
						.then((result) => {
							$scope.loading = false;
							$scope.customers = result.data;
						})
						.catch((error) => {
							$scope.loading = false;
							//do something
							console.log('getCustomers error',error);
						});
				};
					

				$scope.view = (c) => {

					console.log('view',c);
					
					$scope.selectedCustomer = c;
					$scope.loadingOrder = true;
					customer.getOrders(c.customerNumber)
					.then((result) => {
						$scope.selectedCustomer.orders = result.data;
						$scope.loadingOrder = false;
						console.log('customer order',result);
					})
					.catch((error) => {
						//show pop up
						console.log('getOrders error',error);
						$scope.loadingOrder = false;
					});
				}

								
				$scope.init();

				console.log('customers',$scope);
				
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
