angular.module('notesApp', [])
       .controller('MainController', [function(){
         var self = this;
         self.sports = [
           { label: 'Basketball', selected: 'YES' },
           { label: 'Cricket', selected: 'NO' },
           { label: 'Soccer', selected: 'NO' },
           { label: 'Swimming', selected: 'YES' }
         ];
       }]);
