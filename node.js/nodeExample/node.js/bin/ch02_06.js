let calc2 = require('./calc2');

console.log('모듈로 분리한 후 - calc2.add : ' + calc2.add(30, 30))

let nconf = require('nconf');
var os = nconf.get('OS');
console.log('OS 환경변수의 값 : ' + os);

