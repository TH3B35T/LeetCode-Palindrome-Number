/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reversed_x = x.toString().split('').reverse().join('');
    return x == reversed_x;
};
