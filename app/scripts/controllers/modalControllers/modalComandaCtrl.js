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

        mcc.menues =[
        {id: 0, menu: 'Carne Al Horno', precio: 65, idReceta: 1},
        {id: 1, menu: 'Empanadas Arabes', precio: 10, idReceta: 2},
        {id: 2, menu: 'Empanadas Criollas', precio: 10, idReceta: 3},
        {id: 3, menu: 'Milanesa Napolitana', precio: 60, idReceta: 4},
        {id: 4, menu: 'Papa Fritas', precio: 35, idReceta: 5},
        {id: 5, menu: 'Pollo al Horno', precio: 50, idReceta: 6},
        ];

        mcc.save = function () {
           $uibModalInstance.close(mcc.pedido);
        }

  });
