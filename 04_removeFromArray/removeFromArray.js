// I was unaware of indexOf(), which I would've used had w3schools decided it to include it
// on the page called JS ARRAY METHODS and not have 4 different pages of methods...
const removeFromArray = function(array, ...removeThese) {
    for (let i = 0; i < removeThese.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] === removeThese[i]) {
                array.splice(j,1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
