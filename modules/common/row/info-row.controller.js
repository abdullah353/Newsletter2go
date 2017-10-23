(function () {
  'use strict';

  var app = angular.module('common');

  app.controller('InfoRowController', ['$scope', 'UserService',
    function($scope, UserService) {

      $scope.show = function(userId) {
        $scope.$emit('InfoRowController:ShowUserModal', userId);
      };

      $scope.delete = function(userId) {
        if(userId) {
          UserService.rmById(userId);
        }
      };

    }]);

}());