(function () {
  'use strict';

  var app = angular.module('user');

  app.controller('TableController',
    ['$rootScope', '$scope', '$filter', 'UserService',
    function($rootScope, $scope, $filter, UserService) {

      // Pagination Default Configurations. Better to load from conf.
      $scope.perPage = 10;
      $scope.currentPage = 1;
      $scope.tableHeaders = ['Select', 'User Id', 'Actions'];

      $scope.pageChanged = function() {
        if(!UserService.all()) { return; }

        $scope.tableRows = UserService.all().slice(
          ($scope.currentPage - 1) * $scope.perPage, 
          $scope.currentPage * $scope.perPage
        );
        $scope.totalItems = UserService.all().length;
      };

      // 1. initializing.
      $scope.pageChanged();
      // 2. listening for any update on pagination.
      $rootScope.$on('UserService:usersAvailable', $scope.pageChanged);
      // 3. listening for any delete request on user.
      $scope.$on('InfoRowController:DeleteUser', function(evnt, id) {
        UserService.rmById(id);
      });
      // 3. listening for show request.
      $scope.$on('InfoRowController:ShowUser', function(evnt, id) {
        $scope.$emit('TableController:ShowUserModal', UserService.getById(id));
      });

      // Top Table actions.
      $scope.deleteMultiples = function() {
        UserService.rmSelected();
      };

      $scope.$watch('tableRows', function(){
        if(!UserService.all()) { return; }

        $scope.selectedCount = $filter('checkedCount')(UserService.all());
        $scope.$emit(
          'TableController:UpdatedSelectedItems',
           UserService.toArray()
         );
      }, true);
  }]);

}());