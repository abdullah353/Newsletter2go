(function () {
  'use strict';

  var app = angular.module('row');

  app.controller('InfoRowController', ['$scope',
    function($scope) {

      $scope.show = function(userId) {
        $scope.$emit('InfoRowController:ShowUser', userId);
      };

      $scope.delete = function(userId) {
        if(userId) {
          $scope.$emit('InfoRowController:DeleteUser', userId);
        }
      };
    }]);

}());