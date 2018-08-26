'use strict';

/**
 * @ngdoc service
 * @name nimbusEmsApp.auth
 * @description
 * # auth
 * Service in the jsonarApp.
 */
angular.module('jsonarApp')
	.service('modal',function(bootstrap4,$compile,$q){
		this.modal = (attrs,$scope) => {
						
			var deferred	=	$q.defer();
			
			angular.element('body').append($compile(this.template(attrs))($scope));
			
			deferred.resolve(true);
			
			angular.element('#modal').modal('show').on('hidden.bs.modal', function () {
				this.remove();
			});
			
			return deferred.promise;

		};

		this.template = (attrs) => {
			var str = '';
				str	+=	'<div id="modal" class="modal fade" tabindex="-1" role="dialog">';
				str	+=		'<div class="modal-dialog '+((attrs.type === 'small') ? 'modal-sm' : ( attrs.type === 'large ') ? 'modal-lg' : '' )+'" role="document">';
				str	+=			'<div class="modal-content">';
				str	+=				'<div class="modal-header">';
				str	+=					attrs.title ? '<h5 class="modal-title">'+attrs.title+'</h5>' : '';
				str	+=					'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
				str	+=				'</div>';
				str	+=				attrs.body ? '<div class="modal-body">'+attrs.body+'</div>' : '';
				str	+=				attrs.footer ? '<div class="modal-footer">'+attrs.footer+'</div>' : '';
				str	+=			'</div>';
				str	+=		'</div>';
				str	+=	'</div>';
			return str;
		}

	});