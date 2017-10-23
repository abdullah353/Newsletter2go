(function () {
  'use strict';

  var app = angular.module('csv');

  app.directive('csvButton', function() {

    return {
      restrict: 'EA',
      templateUrl: 'common/csv/csv-button.html',
      controller: 'CsvController'
    };
  });

}());