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
					{id: 0, name: 'Pedido #1', pedido:'', direccion:'', menu:'', mozo:'', cliente:'', entregado:'', cuentaCorriente:'', pagado:''},
					{id: 1, name: 'Pedido #2', pedido:'', direccion:'', menu:'', mozo:'', cliente:'', entregado:'', cuentaCorriente:'', pagado:''},
					{id: 2, name: 'Pedido #3', pedido:'', direccion:'', menu:'', mozo:'', cliente:'', entregado:'', cuentaCorriente:'', pagado:''},
					{id: 3, name: 'Pedido #4', pedido:'', direccion:'', menu:'', mozo:'', cliente:'', entregado:'', cuentaCorriente:'', pagado:''},
					{id: 4, name: 'Pedido #5', pedido:'', direccion:'', menu:'', mozo:'', cliente:'', entregado:'', cuentaCorriente:'', pagado:''},
					{id: 5, name: 'Pedido #6', pedido:'', direccion:'', menu:'', mozo:'', cliente:'', entregado:'', cuentaCorriente:'', pagado:''},
					{id: 6, name: 'Pedido #7', pedido:'', direccion:'', menu:'', mozo:'', cliente:'', entregado:'', cuentaCorriente:'', pagado:''},
					{id: 7, name: 'Pedido #8', pedido:'', direccion:'', menu:'', mozo:'', cliente:'', entregado:'', cuentaCorriente:'', pagado:''},
					{id: 8, name: 'Pedido #9', pedido:'', direccion:'', menu:'', mozo:'', cliente:'', entregado:'', cuentaCorriente:'', pagado:''},
				];

				scope.mozos =[
					{id: 0, name: 'fede'},
					{id: 1, name: 'diego'},
					{id: 2, name: 'mica'},
					{id: 3, name: 'Magui'}
				];

				scope.clientes =[
					{id: 0, name: 'Camila', direccion: '13'},
					{id: 1, name: 'moni', direccion: '342'},
					{id: 2, name: 'Laura', direccion: '45341'},
					{id: 3, name: 'Jose', direccion: '123'},
					{id: 4, name: 'Pablo', direccion: '464'},
				];

				scope.time = new Date();

				scope.setIndex = function (i) {
					index = i;
				}

				scope.getIndex = function () {
					return index;
				}

			}
	});
