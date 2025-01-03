const removeFromArray = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            if (arr[i] === arguments[j]) {
                arr.splice(i--,1); // decrement i since there will be a new element in this index after deleting
                break;
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
