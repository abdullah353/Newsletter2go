(function () {
  'use strict';

  var app = angular.module('common');

  app.controller('ModalController', ['$scope', '$uibModal', 'ModalService',
    function($scope, $uibModal, ModalService) {
      var showModalWindow = function (evnt, data) {
        var evntPostfix = evnt.name.split(':')[1];
        $uibModal.open({
            templateUrl: ModalService.getTemplate(evntPostfix),
            controller: ModalService.getController(evntPostfix),
            resolve: ModalService.getResolve(evntPostfix, data)
        });
      };

      // TODO (refactor): Optimise Event Naming conventions, and 
      // structure of events.
      $scope.$on('InfoRowController:ShowUserModal', function(evnt, data){
        showModalWindow(evnt, data);
      });

      $scope.$on('ProfileController:ConfirmChange', function(evnt, data){
        showModalWindow(evnt, data);
      });

  }]);
}());