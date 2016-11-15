(function (){
  'use-strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.listMenu = "";
    $scope.result = "";

    function checkMenu(value) {
      return (value != "" && value != " ");
    }

    $scope.checkOrder = function () {
      if ($scope.listMenu == "") {
        $scope.inputStyle={borderColor:'red'};
        $scope.messageStyle={color:'red'};
        $scope.result = "Please enter data first";
      } else {
        var menus = $scope.listMenu.split(/[,]/).filter(checkMenu);
        var num = menus.length;
        console.log(menus);
        console.log(num);
        if (num <= 0) {
          $scope.inputStyle={borderColor:'red'};
          $scope.messageStyle={color:'red'};
          $scope.result = "Please enter data first";
        } else if (num <= 5) {
          $scope.inputStyle={borderColor:'green'};
          $scope.messageStyle={color:'green'};
          $scope.result = "Enjoy!";
        } else {
          $scope.inputStyle={borderColor:'green'};
          $scope.messageStyle={color:'green'};
          $scope.result = "Too much!";
        }
      }
    }
  }
})();
