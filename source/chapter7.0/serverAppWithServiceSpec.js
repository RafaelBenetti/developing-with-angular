describe('Server App Integartion', function(){
  beforeEach(module('serverApp2'));

  var ctrl, mockBackend;

  beforeEach(inject(function($controller, $httpBackend){
    mockBackend = $httpBackend;
    mockBackend.expectGET('/api/note')
      .respond(404, {msg: 'Not Found'});
    ctrl = $controller('MainCtrl');
    // Neste ponto, uma solicitação ao servidor deveria ser feita.
  }));

  it('Should handle error while loading items', function(){
    // Inicialment, antes de o servidor responder, items deverá ser vaziu.
    expect(ctrl.items).toEqual([]);

    // Simula uma resposta do servidor.
    mockBackend.flush();

    // Não há items provenientes no servidor, somente um erro.
    // Portanto items devera continuar vaziu.
    expect(ctrl.items).toEqual([]);

    // Verifica a mensagem de erro.
    expect(ctrl.errorMessage).toEqual('Not Found');
});

  afterEach(function(){
    // Garante que todas as expecs definidos em $httpBackend realmente foram chamados.
    mockBackend.verifyNoOutstandingExpectation();

    // Garante que todas as solicitações ao servidor foram realmente respondidas (usando o .flush()).
    mockBackend.verifyNoOutstandingRequest();
  });
});
