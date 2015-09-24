angular.module('notesApp', [])
       .controller('MainController', [function(){
         var self = this;
         self.notes = {
           shyam: {
             id: 1,
             label: 'First Note',
             done: false
           },
           Misko: {
             id: 3,
             label: 'Finished Third Note',
             done: true
           },
           brad: {
             id: 2,
             label: 'Second Note',
             done: false
           }
         };
       }]);
