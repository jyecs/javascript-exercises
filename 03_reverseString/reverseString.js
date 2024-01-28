const reverseString = function(string) {
    let str = "";
    for (let i = 0; i < string.length; i++) {
        str += string.charAt(string.length - 1 - i);
    }

    return str;
};

// Do not edit below this line
module.exports = reverseString;
