
//Take two arrays of unique integers (A and B)
//Return list of all items in A that matches the sum of any two items in B

//1. If array items are not unique, find the unique array items
//2. Iterate through array A elements, subtract each element from arrayB to determine pairs of subractors.
//3. Check if the pair of numbers are present in arrayB, if yes, jump to the next arrayA item else continue until end.


function sumChecker(arrayA, arrayB) {

    if (arrayA === undefined || arrayA === null || arrayB === undefined || arrayB === null) {
        return 'Please provide two arrays as input';
    }

    distinctA = [... new Set(arrayA)];
    distinctB = [... new Set(arrayB)];

    var currentAItem;
    var currentBItem;
    var difference;
    var result = [];
    for (var i = 0; i < distinctA.length; i++) {
        currentAItem = distinctA[i];
        for (var j = 0; j < distinctB.length; j++) {
            currentBItem = distinctB[j];
            difference = currentAItem - currentBItem;
            if (distinctB.indexOf(difference) === -1 || distinctB.indexOf(difference) === j) { continue; }
            else {
                //console.log(`${distinctA[i]} - ${distinctB[j]} = ${difference}; expectedSubtractor: ${distinctB.indexOf(difference)}`);
                result.push(distinctA[i]);
                break;
            }
        }
    }

    if (result === undefined || result === null || result.length === 0) { return "No sum found"} 
    else { return (`Result: ${result}`); };
}

module.exports = sumChecker
