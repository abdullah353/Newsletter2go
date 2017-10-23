(function () {
  'use strict';

  var app = angular.module('common');

  app.filter('ageFilter', function() {
       function calculateAge(birthday) {
          var ageDifMs = Date.now() - birthday.getTime();
          var ageDate = new Date(ageDifMs);
          return Math.abs(ageDate.getUTCFullYear() - 1970);
       }

       return function(birthdate) { 
             return calculateAge(new Date(birthdate));
       }; 
  });

  app.filter('checkedAction', function() {
    return function(data, action) { 
      return data
        .filter(function (i) { return i.checked; })
        .map(function (i) { return action(i); });
    }; 
  });

  app.filter('checkedCount', function() {
    return function(data) { 
      return data
        .filter(function (i) { return i.checked; }).length;
    }; 
  });

}());