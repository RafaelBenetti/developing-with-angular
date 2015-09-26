angular.module('notesApp', [])
       .controller('MainController', [function(){
         var self = this;
         self.submit = function(){
           console.log('User clicked submit with', self.user);
         };
       }]);
