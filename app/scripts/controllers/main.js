'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function($uibModal, $log) {

        var mc = this;

        var index = -1;

        mc.pedidos = [
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

        mc.openModal = function (i) {
          index = i;
          var modalInstance = $uibModal.open({
              controller: "ModalComandaCtrl",
              controllerAs: 'mcc',
              templateUrl: 'views/modals/modalComanda.html',
              resolve: {
                pedido: function () {
                          return mc.pedidos[index];
                        }
              }
          });

          modalInstance.result.then(function (pedido) {
            console.log(pedido);
          }, function () {
            $log.info('Modal dismissed at: ' + new Date());
          });


        }

  });
