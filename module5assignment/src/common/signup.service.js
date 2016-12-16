(function () {
  'use strict';

  angular.module('common')
  .service('SignUpService', SignUpService);

  SignUpService.$inject = [];
  function SignUpService() {
    var service = this;
    service.userInfo = [];

    service.signUp = function (info) {
      if (Object.keys(info).length > 0) {
        service.userInfo.push(info);
      }
    }

    service.getUserInfo = function () {
      return service.userInfo;
    }

    service.checkUserInfo = function () {
      return (service.userInfo.length == 0? false : true);
    }
  }
})();
