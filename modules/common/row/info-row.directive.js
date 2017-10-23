(function () {
  'use strict';

  var app = angular.module('row');

  app.directive('infoRow', function() {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'common/row/info-row.html'
    };
  });

}());