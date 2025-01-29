exports.config = {
    // Общее количество тестов
    specs: [
        './test/**/*.test.js'
    ],
    // Директория, в которой находятся тесты
    exclude: [],
    
    // Настройки браузера
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            w3c: false
        }
    }],
    
    // Настройки тестового фреймворка
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
    // Настройки логирования
    logLevel: 'info',
    outputDir: './logs',
    
    // Настройки reporter'ов
    reporters: ['spec'],
    
    // Настройки для автоматического открытия браузера
    before: function (capabilities, specs) {
        browser.setTimeout({ 'implicit': 10000 });
    }
};
