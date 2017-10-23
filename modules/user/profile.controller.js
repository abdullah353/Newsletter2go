(function () {
  'use strict';

  var app = angular.module('user');

  app.controller('ProfileController', 
    ['$rootScope', '$scope', '$stateParams', 'UserService',
    function($rootScope, $scope, $stateParams, UserService) {

      var user = null;
      $scope.editMode = false;
      
      var showUser = function(id) {
        user = UserService.getById(id);
        if(!user) { return; }

        $scope.id = user.id;
        $scope.firstName = user.firstName;
        $scope.lastName = user.lastName;
        $scope.email = user.email;
        $scope.country = user.country;
        $scope.dateOfBirth = user.dateOfBirth;      
      };

      if (UserService.all()) { showUser($stateParams.userID); }
      $rootScope.$on('UserService:usersAvailable', function() {
        showUser($stateParams.userID);
      });

      $scope.editUser = function() {
        $scope.editMode = !$scope.editMode;
      };
      
      $scope.cancel = function() {
        if ( $scope.firstName !== user.firstName 
          || $scope.lastName !== user.lastName) {

          $scope.$emit('ProfileController:ConfirmChange');
        } else {
          $scope.editMode = false;
        }
      };

      $scope.save = function() {
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