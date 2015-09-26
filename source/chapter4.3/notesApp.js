angular.module('notesApp', [])
       .controller('MainController', [function(){
         var self = this;
         self.submit1 = function(){
           // cria o objeto para enviar ao servidor.
           var user = { username: self.userName, password: self.password };
           console.log('First form submit with ', user);
         };
         self.submit2 = function(){
           console.log('Second form submit with ', self.user);
         };
       }]);
