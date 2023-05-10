const capitalizeString = require('./capital.js');

test('return string with the first letter capitalized', ()=>{
    expect(capitalizeString("hello world")).toEqual("Hello world");
});