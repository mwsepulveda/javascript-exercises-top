const reverseString = function(string) {
    const chars = string.split("");
    let left = 0, right = chars.length - 1;
    while (left < right) {
        let tmpLeft = chars[left];
        chars[left] = chars[right];
        chars[right] = tmpLeft;
        left++;
        right--;
    }

    return chars.join("");
};

// Do not edit below this line
module.exports = reverseString;
