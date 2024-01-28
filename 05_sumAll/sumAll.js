const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) { return "ERROR" };
    if (num1 < 0 || num2 < 0) { return "ERROR"};
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    let count = 0;

    for (let i = min; i <= max; i++) {
        count += i;
    }

    return count;
};

// Do not edit below this line
module.exports = sumAll;
