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
					{id: 0, name: 'Pedido #1', mozo: 'Juan Carlos'},
					{id: 1, name: 'Pedido #2', pedido:'', direccion:'', menu:'', mozo:'fede', cliente:'', entregado:'', cuentaCorriente:'', pagado:''},
					{id: 2, name: 'Pedido #3', pedido:'', direccion:'', menu:'', mozo:'mica', cliente:'', entregado:'', cuentaCorriente:'', pagado:''},
					{id: 3, name: 'Pedido #4', pedido:'', direccion:'', menu:'', mozo:'diego', cliente:'', entregado:'', cuentaCorriente:'', pagado:''},
					{id: 4, name: 'Pedido #5', pedido:'', direccion:'', menu:'', mozo:'riso', cliente:'', entregado:'', cuentaCorriente:'', pagado:''},
					{id: 5, name: 'Pedido #6', pedido:'', direccion:'', menu:'', mozo:'miguel', cliente:'', entregado:'', cuentaCorriente:'', pagado:''},
					{id: 6, name: 'Pedido #7', pedido:'', direccion:'', menu:'', mozo:'boludo', cliente:'', entregado:'', cuentaCorriente:'', pagado:''},
					{id: 7, name: 'Pedido #8', pedido:'', direccion:'', menu:'', mozo:'gon', cliente:'', entregado:'', cuentaCorriente:'', pagado:''},
					{id: 8, name: 'Pedido #9', pedido:'', direccion:'', menu:'', mozo:'tu Vieja', cliente:'', entregado:'', cuentaCorriente:'', pagado:''},
				];

				scope.mozos =[
					{id: 0, name: 'fede'},
					{id: 1, name: 'diego'},
					{id: 2, name: 'mica'},
					{id: 3, name: 'Magui'}
				];

				scope.setIndex = function (i) {
					index = i;
				}

				scope.getIndex = function () {
					return index;
				}

			}
	});
