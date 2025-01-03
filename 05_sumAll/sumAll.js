const sumAll = function(a, b) {
    if (a < 0 || b < 0) return "ERROR";
    else if (typeof a !== "number" || typeof b !== "number") return "ERROR";
    else if (Math.floor(a) != a || Math.floor(b) != b) return "ERROR";

    let start = a, end = b;
    if (a > b) {
        start = b;
        end = a;
    }
    
    let sum = 0;
    while (start <= end) {
        sum += start++;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
