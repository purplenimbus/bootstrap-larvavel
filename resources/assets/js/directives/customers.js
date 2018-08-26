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

					//console.log('order details',order);

					var loop = '',
						body = '';

					Object.keys(order.details.product).forEach(function(key){
						loop += '<li class="uk-clearfix list-group-item">';
						loop += '<div class="float-left text-uppercase">'+key+'</div>';
						loop += '<div class="float-right">'+order.details.product[key]+'</div>';
						loop += '</li>';
					});

					body = bootstrap4.list({
						ul_class:'list-group-flush',
						loop : loop
					});

					modal.modal('small',order.orderNumber,body,false,$scope).then(() => {

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
