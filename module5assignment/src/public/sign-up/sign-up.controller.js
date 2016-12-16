(function functionName() {
  'use strict';

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'SignUpService'];
  function SignUpController(MenuService, SignUpService) {
    var signUpCtrl = this;
    signUpCtrl.firstName = '';
    signUpCtrl.lastName = '';
    signUpCtrl.emailAddress = '';
    signUpCtrl.phoneNumber = '';
    signUpCtrl.favoriteChoice = '';
    signUpCtrl.isGoodChoice = true;
    signUpCtrl.isCompleted = false;

    signUpCtrl.signUp = function () {
      var userInfo = {};
      userInfo.firstName = signUpCtrl.firstName;
      userInfo.lastName = signUpCtrl.lastName;
      userInfo.emailAddress = signUpCtrl.emailAddress;
      userInfo.phoneNumber = signUpCtrl.phoneNumber;
      userInfo.favoriteChoice = signUpCtrl.favoriteChoice;

      SignUpService.signUp(userInfo);
      signUpCtrl.isCompleted = true;
      signUpCtrl.firstName = '';
      signUpCtrl.lastName = '';
      signUpCtrl.emailAddress = '';
      signUpCtrl.phoneNumber = '';
      signUpCtrl.favoriteChoice = '';
      signUpCtrl.isGoodChoice = true;
    }

    signUpCtrl.validChoice = function () {
      return MenuService.getMenuItem(signUpCtrl.favoriteChoice).then(
        function (response) {
          console.log("Get item successful!");
          signUpCtrl.isGoodChoice = true;
        }, function (response) {
          console.log("Get item failed!");
          signUpCtrl.isGoodChoice = false;
        }
      );
    }

    signUpCtrl.valid = function () {
      return (signUpCtrl.firstName !== ''
           && signUpCtrl.lastName !== ''
           && signUpCtrl.emailAddress !== ''
           && signUpCtrl.phoneNumber !== ''
           && signUpCtrl.favoriteChoice !== ''
           && signUpCtrl.isGoodChoice);
    };
  }
})();
