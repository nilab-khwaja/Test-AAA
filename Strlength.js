function stringLength(string){
    const length = string.length;
    if(length < 1 || length >10){
        throw new error('tring must be between 1 and 10 characters long');
    }
    return length;
}

console.log(stringLength('hello'));



module.exports = stringLength;