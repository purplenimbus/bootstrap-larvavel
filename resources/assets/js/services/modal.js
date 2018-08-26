'use strict';

/**
 * @ngdoc service
 * @name nimbusEmsApp.auth
 * @description
 * # auth
 * Service in the jsonarApp.
 */
angular.module('jsonarApp')
	.service('modal',function(bootstrap4,$compile){
		this.modal = (type,title,body,footer,$scope) => {
						
			var str	=	'',
				deferred	=	$q.defer();
			
			str	+=	'<div id="modal" class="modal fade" tabindex="-1" role="dialog">';
			str	+=		'<div class="modal-dialog '+((type === 'small') ? 'modal-sm' : ( type === 'large ') ? 'modal-lg' : '' )+'" role="document">';
			str	+=			'<div class="modal-content">';
			str	+=				'<div class="modal-header">';
			str	+=					'<button type="button" class="close" data-dismiss="modal" aria-label="Close" ng-click="closeModal($event)"><span aria-hidden="true">&times;</span></button>';
			str	+=					'<h4 class="modal-title">'+title+'</h4>';
			str	+=				'</div>';
			str	+=				'<div class="modal-body">'+body+'</div>';
			str	+=				footer ? '<div class="modal-footer">'+footer+'</div>' : '';
			str	+=			'</div>';
			str	+=		'</div>';
			str	+=	'</div>';
			
			angular.element('body').append($compile(str)($scope));
			
			deferred.resolve(str);
			
			angular.element('#modal').modal('show').on('hidden.bs.modal', function () {
				this.remove();
			});
			
			return deferred.promise;

		};

	});