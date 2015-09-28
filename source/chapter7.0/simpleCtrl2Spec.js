describe('SimpleControler2', function(){
  beforEach(module('simpleCtrl2App'));

  var ctrl, $loc;
  beforEach(inject(function($controller, $location){
    ctrl = $controller('SimpleCtrl2');
    $loc = $Location;
  }));

  it('Should navigate away from the current page', function(){
  expect($loc.path()).toEqual('');
    $Loc.path('/here');
    ctrl.navigate1();
    expect($loc.path()).toEqual('/some/where');
  });

  it('Should navigate away from the current page', function(){
  expect($loc.path()).toEqual('');
    $Loc.path('/there');
    ctrl.navigate2();
    expect($loc.path()).toEqual('/some/where/else');
  });
});
