module.exports = function(config) {
  config.set({
    // path de base que será usado para resolver os nomes dos arquivos e exclusões.
    pathBase: '',
    // framework de testes a ser usado (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],
    // reporters configuration
    reporters: ['mocha'],
    // lista de arquivos/padrões a serem carregados no navegador.
    files: [
      '../scripts/angular.js',
      '../scripts/angular-mocks.js',
      '../scripts/angular-route.min.js',
      '*.js',
    ],
    plugins: [
        'karma-jasmine',
        'karma-mocha-reporter',
        'karma-phantomjs-launcher'
      ],
    // lista de arquivos/padrões a serem excluídos.
    exclude: [],
    // porta do servidor web.
    port: 8080,
    // nível de logging.
    // valores possíveis: LOG_DISABLE \\ LOG_ERROR \\ LOG_WARN \\ LOG_INFO \\ LOG_DEBUG.

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    logLevel: config.LOG_INFO,
    // habilita/desabilita a observação de arquivos e a execução dos testes.
    // sempre que algum arquivo for alterado.
    autoWatch: true,
    // inicia eses navegadores, atualmente disponíveis:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (somente no mac)
    // - PhantomJS
    // - IE (somente no Windows)
    browsers: ['PhantomJS'],
    // modo de integração contínua.
    // se for true, captura os navegadores, executa os testes e sai.
    singleRun: false
  });
};
