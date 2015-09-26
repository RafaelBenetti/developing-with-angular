angular.module('notesApp', [])
       .controller('MainController', [function(){
         var self = this;
         self.change = function(){
           self.userName = 'changed';
           self.userPassword = 'password';
         };
         self.submit = function(){
           console.log('User clicked submit with', self.userName, self.userPassword)
         };
       }]);
