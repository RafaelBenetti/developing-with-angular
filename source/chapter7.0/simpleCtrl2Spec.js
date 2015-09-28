describe('SimpleController2', function(){
  beforeEach(module('simpleController2App'));

  var ctrl, $loc;
  beforeEach(inject(function($controller, $location){
    ctrl = $controller('SimpleController2');
    $loc = $location;
  }));

  it('Should navigate away from the current page', function(){
  expect($loc.path()).toEqual('');
    $loc.path('/here');
    ctrl.navigate1();
    expect($loc.path()).toEqual('/some/where');
  });

  it('Should navigate away from the current page', function(){
    expect($loc.path()).toEqual('');
    $loc.path('/there');
    ctrl.navigate2();
    expect($loc.path()).toEqual('/some/where/else');
  });
});
