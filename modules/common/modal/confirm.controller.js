(function () {
  'use strict';

  var app = angular.module('common');

  app.controller('ConfirmController', ['$rootScope', '$scope', '$uibModalInstance',
    function($rootScope, $scope, $uibModalInstance) {

      $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
      };

      $scope.yes = function() {
        $rootScope.$broadcast('ConfirmController:YesClicked');
        $uibModalInstance.dismiss('cancel');
      };
  }]);

}());