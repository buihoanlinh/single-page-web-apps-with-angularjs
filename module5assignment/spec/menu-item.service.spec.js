describe('menuitemservice', function () {

  var menuitemservice;
  var $httpBackend;
  var ApiBasePath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      menuitemservice = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiBasePath = $injector.get('ApiPath');
    });
  });

  it('should return menu item', function() {
    $httpBackend.whenGET(ApiBasePath + '/menu_items/L1.json').respond({"id":193,"short_name":"L1","name":"Orange Chicken"});
    menuservice.getMenuItem("L1").then(function(response) {
      expect(response.data).toEqual({"id":193,"short_name":"L1","name":"Orange Chicken"});
    });
    $httpBackend.flush();
  });

});
