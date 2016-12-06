(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsCategoryController', ItemsCategoryController);

  ItemsCategoryController.$inject = ['items'];
  function ItemsCategoryController(items) {
    var itemsCategory = this;
    // console.log("Short name: ", shortName);
    // itemsCategory.shortName = shortName;
    console.log("Items category: ", categoryItems);
    itemsCategory.items = items;
  }
})();
