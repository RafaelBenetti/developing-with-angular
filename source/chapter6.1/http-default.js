angular.module('notesApp', [])
  .controller('LoginController', ['$http', function($http){
    var self = this;
    self.user = {};
    self.message = 'Please Login';
    self.login = function(){
      $http.post('/api/login', self.user).then(
        function(resp){
          self.message = resp.data.msg;
        }
      );
    };
  }])
  .config(['$httpProvider', function($httpProvider){
    // Todo dado de POST passa a ter estilo JQuery.
    $httpProvider.defaults.transformRequest.push(
      function(data){
        var requestStr;
        if (data) {
          data = JSON.parse(data);
          for (var key in data) {
            if (requestStr) {
                requestStr += '&' + key + '=' + data[key];
            } else {
                requestStr = key + '=' + data[key];
            }
          }
        }

        return requestStr;
      });
      // Degie o tipo de conteúdo como FORM para todas as solicitações post.
      // Isso naõ vale para solicitações GET.
      $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  }]);
