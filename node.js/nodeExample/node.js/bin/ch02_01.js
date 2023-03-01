console.log('Hello World');
console.log('숫자입니다. %d', 20);
console.log('문자열입니다. %s', '안녕');

var person = {
  name:'소녀시대',
  age:20
};
console.log('Json객체입니다. %j', person);

console.dir(person);

console.time('duration');

let result = 0;
for(let i=0;i<10000;i++){
result += i;
}

console.timeEnd('duration');

console.log('파일 이름 : %s', __filename);
console.log('패스 : %s', __dirname);




