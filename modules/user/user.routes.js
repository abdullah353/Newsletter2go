(function () {
  'use strict';

  var app = angular.module('user');

  var usersListState = {
    name: 'users',
    url: '/users',
    templateUrl: 'user/table.html',
    controller: 'TableController',
  };

  var userProfileState = {
    name: 'userProfile',
    url: '/users/{userID: int}',
    templateUrl: 'user/profile.html',
    controller: 'ProfileController',
  };

  app.config(function($stateProvider) {
    $stateProvider.state(usersListState);
    $stateProvider.state(userProfileState);
  });

}());