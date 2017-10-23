(function () {
  'use strict';

  var app = angular.module('common');

  app.controller('CsvController', ['$scope', 'UserService',
    function($scope, UserService) {
      $scope.filename = "users.csv";

      // $scope.download = function () {
      //   var delimiter = ';';
      //   $scope.hreflink = encodeURI("data:text/csv;charset=utf-8," + UserService.toCsv(delimiter));
      // }

  }]);
}());

