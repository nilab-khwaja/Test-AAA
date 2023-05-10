const stringLength = require('./Strlength.js');

test('stringLength function must return correct characters count', () => {
    expect(stringLength('hello')).toBe(5);
  });

  test('stringLength throws error if string is less than  one or more than 10 character long', ()=>{
    expect(()=>stringLength('').toThrowError('string must be between 1 and 10 long'));
  });

  // test('stringLength throws error if string is more than ten characters long', () => {
  //   expect(() => stringLength('this is too long')).toThrowError('String must be between 1 and 10 characters long');
  // });

  test('stringLength does not throw error if string is one character long', () => {
    expect(() => stringLength('a')).not.toThrow();
  });
  
  test('stringLength does not throw error if string is ten characters long', () => {
    expect(() => stringLength('1234567890')).not.toThrow();
  });
