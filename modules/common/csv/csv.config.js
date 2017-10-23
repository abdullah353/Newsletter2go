(function () {
  'use strict';

  var app = angular.module('csv');

  app.config(['$compileProvider',
    function($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|data):/);
    }
  ]);

}());

