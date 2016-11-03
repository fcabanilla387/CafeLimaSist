'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('notifications',function(){
		return {
        templateUrl:'scripts/directives/notifications/notifications.html',
        restrict: 'E',
        replace: true,
				link: link
    	}

			function link(scope, element, attrs) {

				var index = -1;

				scope.pedidos = [
					{id: 0, name: 'Pedido #1'},
					{id: 1, name: 'Pedido #2'},
					{id: 2, name: 'Pedido #3'},
					{id: 3, name: 'Pedido #4'},
					{id: 4, name: 'Pedido #5'},
					{id: 5, name: 'Pedido #6'},
					{id: 6, name: 'Pedido #7'},
					{id: 7, name: 'Pedido #8'},
					{id: 8, name: 'Pedido #9'},
					{id: 9, name: 'Pedido #10'}
				];

				scope.setIndex = function (i) {
					index = i;
				}

				scope.getIndex = function () {
					return index;
				}
			}
	});
