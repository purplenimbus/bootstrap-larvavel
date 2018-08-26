'use strict';

/**
 * @ngdoc service
 * @name nimbusEmsApp.bootstrap
 * @description
 * # bootstrap
 * Service in the jsonarApp.
 */
angular.module('jsonarApp')
	.factory('bootstrap4',function(){
		return {
			input : (attrs) => {

			var str = '<input ';
				str += attrs.attributes ? attrs.attributes : 'type="text"';
				str += ' >';

				return str;
			},
			list : (attrs) => {

			var str = '<ul ';
				str += attrs.ul_class ? attrs.ul_class : 'class="list-group"';
				str += ' >';
				str += attrs.loop ? attrs.loop : '';
				str += '</ul>';

				return str;
			},
			listLink : (attrs) => {

			var str = '<div class="list-group">';
				str += attrs.loop ? attrs.loop : '';
				str += '</div>';

				return str;
			},
			card : (card) => {
				var str= '';

				str += '<div class="card ';
				str += card.class ? card.class : '';
				str += '">';
				str += card.header ? '<div class="card-header">'+card.header+'</div>' : '';
				str += '	<div class="card-body">';
    			str += card.title ? '<h5 class="card-title">'+card.title+'</h5>' : '';
    			str += card.body ? card.body : '';
  				str += '	</div>';
				str += '</div>';

				return str;
			},
			address : (contact) => {
				var str = '';

					str += '<address>';
				    str += contact.title ? '<strong>'+contact.title+'</strong><br>' : '';
				    str += contact.street ? contact.street+'<br>' : '';
				    str += contact.city ? contact.city+',' : '';
				    str += contact.state ? contact.state : '';
				    str += contact.city || contact.state ? ' <br>' : '';
				    str += contact.postalCode ? contact.postalCode+'<br>' : '';
				    if(typeof contact.phones === 'array'){
				    	contact.phones.forEach((c) => {
				    		str += c ? '<abbr title="Phone">P:</abbr> '+c : '';
				    	});
				    }else{
				    	str += contact.phone ? '<abbr title="Phone">P:</abbr> '+contact.phone : '';
				    }
				    
					str += '</address>';

				return str;
			},
			contact : (person) => {
				var str = '';

					str += '<address>';
				    str += person.title ? '<strong>'+person.title+'</strong><br>' : '';
				    str += person.href || person.contact ? '<a href="'+(person.href ? contact.href : '')+'">'+(person.contact ? person.contact : '')+'</a>' : '';

					str += '</address>';

				return str;
			},
			table : (key) => {
				var header = '<table class="table table-responsive table-hover">',
					body = '';

					header += '<thead>';
					body += '<tr><th ng-repeat="(key,header) in '+key+'[0]">{{key | uppercase }}</th></tr>';
					header += '</thead>';
					body += '<tbody>';
					body += '<tr ng-repeat="order in '+key+'" ng-click="details(order,$index)"><td ng-repeat="(key,item) in order">{{ item }}</td></tr>';
					body += '</tbody>';
					body += '</table>';

					return header+body;
			},
			search : (attrs) => {
				var search = '';

				search += '<form class="form-inline mb-4">';
				search += '  <input class="form-control mr-sm-2 col-12" type="search" placeholder="Search" aria-label="Search"';	
				search += attrs.attributes ? attrs.attributes : '';
				search += '	>';
				search += '</form>';

				 return search;
			}
		};
	});