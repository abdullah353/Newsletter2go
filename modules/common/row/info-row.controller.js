(function () {
  'use strict';

  var app = angular.module('common');

  app.controller('InfoRowController', ['$scope',
    function($scope) {

      $scope.show = function(userId) {
        $scope.$emit('InfoRowController:ShowUserModal', userId);
      };

      $scope.delete = function(userId) {
        if(userId) {
          $scope.$emit('InfoRowController:DeleteUser', userId);
        }
      };
    }]);

}());