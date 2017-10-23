(function () {
  'use strict';

  var app = angular.module('common');

  app.service('ModalService', ['UserService', function(UserService) {
      var _this = this;
      var prefix = 'common/modal/';

      // TODO (refactor): we are building fat dictionary of events over here
      // Avoid this in future, we can manage it by naming same event and
      // lookup on something like event id etc.
      _this.getResolve = function(key, data) {
        return {
          'ShowUserModal': { user: function() {
            return UserService.getById(data); }
          },
          'ConfirmChange': {}
        }[key];
      };

      _this.getController = function(key) {
        return {
          'ShowUserModal': 'UserModalController',
          'ConfirmChange': 'ConfirmController',
        }[key];
      };

      _this.getTemplate = function(key) {
        return {
          'ShowUserModal': prefix + 'user-modal.html',
          'ConfirmChange': prefix + 'confirm.html',
        }[key];
      };
  }]);

}());