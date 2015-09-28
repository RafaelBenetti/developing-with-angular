angular.module('notesApp', [])
  .controller('SimpleController', ['$location', function($location){
    var self = this;
    self.navigate = function(){
      $location.path('/some/where/else');
    };
  }]);
