(function () {
  'use strict';

  var app = angular.module('common');

  app.directive('csvButton', function() {

    var button = '<a href=\'{{hreflink}}\' download=\'{{filename}}\'';
    button += 'class=\'btn btn-default\'> Download </a>';

    return {
      restrict: 'EA',
      transclude: !0,
      template: button,
      controller: 'CsvController'
    };
  });

}());