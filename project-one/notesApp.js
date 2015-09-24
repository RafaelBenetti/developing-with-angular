var notesApp = angular.module('notesApp', []);

notesApp.controller('MainController', [function(){
  var self = this;
  self.notes =
     [{
        label: 'First Note',
        done: false,
        assignee: 'Shyam'
      },
      {
        label: 'Second Note',
        done: false
      },
      {
        label: 'Done Note',
        done: true
      },
      {
        label: 'Last Note',
        done: false,
        assignee: 'Brad'
      }];

  self.getNoteClass = function(status){
    return {
      done: status,
      pending: !status
    };
  };

}]);
