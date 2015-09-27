angular.module('notesApp', [])
  .controller('MainController', ['$http', function($http){
    var self = this;
    self.items = [];
    self.newTodo = [];
    var fetchTodos = function(){
      return $http.get('http://localhost:8000/api/note').then(
        function(response){
          self.items = reponse.data;
        }, function(errResponse){
          console.error('Error while fetvhing notes.');
        });
    };

    fetchTodos();

    self.add = function(){
      $http.post('http://localhost:8000/api/note', self.newTodo)
        .then(fetchTodos)
        .then(function(response){
          self.newTodo = {};
        });
    };
  }]);
