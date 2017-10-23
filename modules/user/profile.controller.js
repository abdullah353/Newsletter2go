(function () {
  'use strict';

  var app = angular.module('user');

  app.controller('ProfileController', ['$scope', '$stateParams', 'UserService',
    function($scope, $stateParams, UserService) {
      var user = UserService.getById($stateParams.userID);
      $scope.id = user.id;
      $scope.firstName = user.firstName;
      $scope.lastName = user.lastName;
      $scope.email = user.email;
      $scope.country = user.country;
      $scope.dateOfBirth = user.dateOfBirth;

      $scope.editMode = false;
      
      $scope.editUser = function () {
        $scope.editMode = !$scope.editMode;
      };
      
      $scope.cancel = function () {
        if ( $scope.firstName !== user.firstName 
          || $scope.lastName !== user.lastName) {

          $scope.$emit('ProfileController:ConfirmChange');
        } else {
          $scope.editMode = false;
        }
      };

      $scope.save = function () {
        user.firstName = $scope.firstName;
        user.lastName = $scope.lastName;
        $scope.editMode = false;
      };

      $scope.$on('ConfirmController:YesClicked', function() {
        $scope.firstName = user.firstName;
        $scope.lastName = user.lastName;
        $scope.editMode = false;
      });

  }]);

}());