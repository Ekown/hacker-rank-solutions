// Migratory Birds
// (https://www.hackerrank.com/challenges/migratory-birds/problem)
function migratoryBirds(arr) {
    // Set the frequency of each  bird type to 0
    let frequencyOfBirds = [0, 0, 0, 0, 0];
    let highestFrequency = 0;

    // Gets all the frequency of each bird type
    for (let i = 0; i < arr.length; i++) {
        frequencyOfBirds[arr[i] - 1] += 1;
    }

    // Get the highest frequency
    for (let j = 0; j < frequencyOfBirds.length; j++) {
        if (highestFrequency < frequencyOfBirds[j])
            highestFrequency = frequencyOfBirds[j];
    }

    // Get the index of the highest frequency (bird type = index + 1)
    const highestFrequencyIndex = indexesOf(frequencyOfBirds, highestFrequency);

    // If there are multiple indices, sort the array by ascending and then return the first element (lowest type)
    if (highestFrequencyIndex.length !== 1)
        return (highestFrequencyIndex.sort())[0] + 1;
    else
        return highestFrequencyIndex[0] + 1;
}

// Finds the position of an value in an array (even multiple instances)
function indexesOf(arr, target) {
    // Map matching elements to their index, and others to null.
    return arr.map(function (el, i) { return (el === target) ? i : null; })
        // Throw out the nulls.
        .filter(function (x) { return x !== null; });
}
