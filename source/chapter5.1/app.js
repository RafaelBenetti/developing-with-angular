angular.module('notesApp', [])
  .controller('MainController', ['$log', function($log){
    var self = this;
    self.logStuff = function(){
      $log.log('The button was pressed.');
    };
  }]);
