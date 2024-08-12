module.exports = function reverse (n) {
    let digits = Array.from(String(n), Number);
    let reversedArray = digits.reduce((acc, digit) =>
        [digit, ...acc], []);
    return parseInt(reversedArray.join(''));
}

