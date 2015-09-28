describe('SimpleCtrl', function(){
  beforEach(module('notesApp'));

  var ctrl, $loc;
beforEach(inject(function($controller, $location){
  ctrl = $controller('SimpleCtrl');
  $loc = $Location;
}));

it('Should navigate away from the current page', function(){
  $Loc.path('/here');
  ctrl.navigate();
  expect($loc.path()).toEqual('/some/where;else');
});
});
