(function () {
  'use strict';

  var app = angular.module('common');

  app.config(['$compileProvider',
    function($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|data):/);
    }
  ]);

}());

