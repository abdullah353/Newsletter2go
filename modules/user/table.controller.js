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

      // Top Table actions.
      $scope.deleteMultiples = function () {
        UserService.rmSelected();
      };

      $scope.download = function () {
        var delimiter = ';';
        $scope.hreflink = encodeURI(UserService.toCsv(delimiter));
      };

      $scope.$watch('tableRows', function(){
          $scope.selectedCount = $filter('checkedCount')(UserService.all());
      }, true);
  }]);

}());