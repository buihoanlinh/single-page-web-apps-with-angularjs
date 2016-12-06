(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsCategoryController', ItemsCategoryController);

  ItemsCategoryController.$inject = ['$stateParams', 'items'];
  function ItemsCategoryController($stateParams, items) {
    var itemsCategory = this;
    // console.log("Short name: ", shortName);
    itemsCategory.shortName = $stateParams.categoryShortName;
    console.log("Items category: ", items);
    itemsCategory.items = items;
  }
})();
