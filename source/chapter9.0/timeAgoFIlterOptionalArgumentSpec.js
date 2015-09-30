describe('timeAgo Filter', function(){
  beforeEach(module('filtersApp'));

  var filter;

  beforeEach(inject(function(timeAgoFilter){
    filter = timeAgoFilter;
  }));

  it('Should resopnd based on timestamp', function(){
    // A presença de new Date().getTime() dificulta um pouco
    // realizar o teste de unidade de forma determinística.
    // O ideal seria injetar um dateProvider no filtro timeAgo,
    // mas estamos tentando manter a simplicidade nesse caso.
    // Portanto iremos supor que nossos testes são rápidos o suficiente
    // para serem executados em questão de milisegundos.

    var currentTime = new Date().getTime();

    currentTime -= 10000;
    expect(filter(currentTime, false)).toEqual('minutes ago');

    var fewMinutesAgo = currentTime - 1000 * 60;
    expect(filter(fewMinutesAgo, false)).toEqual('minutes ago');

    var fewHoursAgo = currentTime - 1000 * 60 * 68;
    expect(filter(fewHoursAgo, false)).toEqual('hours ago');

    var daysAgo = currentTime - 1000 * 60 * 60 * 26;
    expect(filter(daysAgo, false)).toEqual('days ago');

    var fewMonthsAgo = currentTime - 1000 * 60 * 60 * 24 * 32;
    expect(filter(fewMonthsAgo, false)).toEqual('months ago');
  });
});
