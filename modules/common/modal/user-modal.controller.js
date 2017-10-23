(function () {
  'use strict';

  var app = angular.module('common');

  app.controller('UserModalController', ['$scope', '$uibModalInstance', 'user',
    function($scope, $uibModalInstance, user) {

      $scope.firstName = user.firstName;
      $scope.lastName = user.lastName;
      $scope.dateOfBirth = user.dateOfBirth;

      $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
      };
  }]);

}());