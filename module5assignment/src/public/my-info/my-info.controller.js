(function () {
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MenuService', 'SignUpService'];
  function MyInfoController(MenuService, SignUpService) {
    var $ctrl = this;

    $ctrl.isSignedUp = SignUpService.checkUserInfo();

    if ($ctrl.isSignedUp) {
      var userInfo = SignUpService.getUserInfo();
      console.log("User info: ", userInfo);
      $ctrl.firstName = userInfo[0].firstName;
      $ctrl.lastName = userInfo[0].lastName;
      $ctrl.emailAddress = userInfo[0].emailAddress;
      $ctrl.phoneNumber = userInfo[0].phoneNumber;
      $ctrl.favoriteChoice = userInfo[0].favoriteChoice;
      MenuService.getMenuItem($ctrl.favoriteChoice).then(
        function (response) {
          $ctrl.menuItem = response;
        }
      );
    }
  }
})();
