(function () {
  'use strict';

  var app = angular.module('user');

  app.filter('checkedAction', function() {
    return function(data, action) { 
      return data
        .filter(function(i) { return i.checked; })
        .map(function(i) { return action(i); });
    }; 
  });

  app.filter('checkedCount', function() {
    return function(data) { 
      return data
        .filter(function(i) { return i.checked; }).length;
    }; 
  });

}());