(function () {
  'use strict';

  var app = angular.module('user');

  app.service('UserService', ['$http', '$rootScope', '$filter',
    function ($http, $rootScope, $filter) {
      var _this = this;

      var sendReadyEvent = function (users) {
        _this.users = users;
        $rootScope.$broadcast('UserService:usersAvailable');
      };

      // TODO (enhancement): async/await in latest NodeJs version.
      $http.get('./data/users.json').then(function (resp) {
          _this.users = resp.data;
          sendReadyEvent(_this.users);
      });

      var getIndex = function (id) {
        return _this.users.findIndex(function(x) {
          return x.id === id;
        });
      };

      _this.getById = function (id) {
        return _this.users[getIndex(id)];
      };

      _this.all = function () { return _this.users; };

      _this.toCsv = function (delimiter) {
        return $filter('checkedAction')(
          _this.all() , function (i) {

            // TODO (refactor): Add argument for keys and apply for loop.
            return [i.id, i.firstName, i.lastName, i.email].join(delimiter);
          }).join('\n');
      };
      
      _this.rmById = function (id) {
            _this.all().splice(getIndex(id), 1);
            sendReadyEvent(_this.users);
      };

      _this.rmSelected = function () {
        return $filter('checkedAction')(
          _this.all() , function (i) { return _this.rmById(i.id); });
      };

  }]);
}());