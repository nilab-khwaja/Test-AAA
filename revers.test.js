const reverseString = require('./revers.js');

test('reverseString reverses a string', ()=>{
    expect(reverseString('hello')).toBe('olleh');
});