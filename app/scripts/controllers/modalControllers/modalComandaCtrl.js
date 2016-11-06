'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:ModalComandaCtrl
 * @description
 * # ModalComandaCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ModalComandaCtrl', function($uibModalInstance, pedido) {

        var mcc = this;
        mcc.pedido = pedido;
        mcc.pedido.time = new Date();

        mcc.mozos =[
          {id: 0, name: 'fede'},
          {id: 1, name: 'diego'},
          {id: 2, name: 'mica'},
          {id: 3, name: 'Magui'}
        ];

        mcc.clientes =[
          {id: 0, name: 'Camila', direccion: '13'},
          {id: 1, name: 'moni', direccion: '342'},
          {id: 2, name: 'Laura', direccion: '45341'},
          {id: 3, name: 'Jose', direccion: '123'},
          {id: 4, name: 'Pablo', direccion: '464'},
        ];

        mcc.save = function () {
           $uibModalInstance.close(mcc.pedido);
        }

  });
