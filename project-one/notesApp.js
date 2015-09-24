var notesApp = angular.module('notesApp', []);

notesApp.controller('MainController', [function(){
  var self = this;
  self.message = 'Hello ';
  self.changeMessage = function(){
    self.message = 'Goodbye';
  };
}]);
