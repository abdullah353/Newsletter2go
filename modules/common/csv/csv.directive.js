(function () {
  'use strict';

  var app = angular.module('common');

  app.directive('csvButton', function() {

    return {
      restrict: 'EA',
      templateUrl: 'common/csv/csv-button.html',
      controller: 'CsvController'
    };
  });

}());