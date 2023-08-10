const removeFromArray = function(arr , value) {
    arr = [];

    for (let indexNum = 0; indexNum < arr.length; indexNum++) {
        if (arr[indexNum] === value) {
            arr.splice(arr[indexNum],1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
