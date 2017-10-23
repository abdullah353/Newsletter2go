(function () {
  'use strict';

  var app = angular.module('csv');

  app.controller('CsvController', ['$scope', '$filter',
    function($scope, $filter) {

      var csvPrefix = 'data:text/csv;charset=utf-8,';
      var delimiter = ';';
      $scope.filename = 'users.csv';
      $scope.enableButton = false;

      $scope.$on('TableController:UpdatedSelectedItems', function(evnt, arr) {
        $scope.enableButton = arr.length;
        $scope.hreflink = encodeURI(
          csvPrefix + $filter('csvFilter')(arr, delimiter));
      });
  }]);

}());

