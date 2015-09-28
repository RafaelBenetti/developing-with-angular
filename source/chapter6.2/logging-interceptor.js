angular.module('notesApp', [])
  .controller('MainController', ['$http', function($http){
    var self = this;
    self.items = [];
    self.newTodo = {};
    var fetchTodos = function(){
      return $http.get('/api/note')
                  .then(function(response){
                    self.items = response.data;
                  }, function(errResponse){
                    console.error('Error while fetching notes.');
                  });
    };

    fetchTodos();

    self.add = function(){
      $http.post('/api/note', self.newTodo)
           .then('fetchTodos')
           .then(function(response) {
             self.newTodo = {};
           });
    };
  }])
  .factory('MyLoggingInterceptor', ['$q', function($q) {
    return {
      request: function(config){
        console.log('Request made with ', config);
        return config;
        // Se houver um erro, não houver permissão ou ocorrer uma condição personalizada
        // return $q.reject('Not allowed');
      },
      requestError: function(rejection){
        console.log('Request error due to ', rejection);
        // Continua para garantir que a próxima cadeia de promise veja um erro.
        return $q.reject(rejection);
        // Ou tratado com sucesso.
        // return somevalue
      },
      response: function(response){
        console.log('Response from server ', response);
        // Retorna uma promise.
        return response || $q.when(response);
      },
      responseError: function(rejection){
        console.log('Error in response ', rejection);
        // Continua para garantir que a próxima cadeia de promise veja um erro.
        // Pode verificar o código de stauts de auth aqui se for necessário.
        // if (rejection.stauts === 403) {
        // Mostra um dialogo de login.
        // Retorna um valor para dizer aos contrladores que foi tratado.
        // }
        // Ou retorna uma rejeição para continuar a cadeia de falhas da promise.
        return $q.reject(rejection);
      }
    };
  }])
  .config(['$httpProvider', function($httpProvider){
    $httpProvider.interceptors.push('MyLoggingInterceptor');
  }]);
