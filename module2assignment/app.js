(function (){
  'use-strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.boughtItem = function (itemIndex) {
      ShoppingListCheckOffService.boughtItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
      {
        name: "Cookies",
        quantity: "10 bags"
      },
      {
        name: "Wine",
        quantity: "10 bottles"
      },
      {
        name: "Sugar",
        quantity: "20 bags"
      },
      {
        name: "Orange juice",
        quantity: "30 bottles"
      },
      {
        name: "Beer",
        quantity: "50 bottles"
      }
    ];
    var boughtItems = [];

    var buyMessage = "";
    var boughtMessage = "Nothing bought yet.";

    service.boughtItem = function (itemIndex) {
      var item = toBuyItems[itemIndex];
      toBuyItems.splice(itemIndex, 1);
      boughtItems.push(item);
    };

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };
  }
})();
