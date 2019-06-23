// Birthday Chocolate
// (https://www.hackerrank.com/challenges/the-birthday-bar/problem)
function birthday(s, d, m) {
    // Checks for arrays with length of 1
    if (s.length == 1)
        return (s[0] == d) ? 1 : 0;

    // Checks for single value arrays
    if (isSingleIntArray(s))
        return (s[0] == d) ? s.length : 0;

    // Default value for number of ways is 0
    let numberOfWays = 0;

    for (let i = 0; i < s.length; i++) {
        // Resets the contiguous sum to zero
        let contiguousSum = 0;

        // Loops and adds each contiguous element based on m
        for (let j = 0; j < m; j++) {
            contiguousSum += s[i+j];
        }

        // If the contiguous sum is equal to d, then increment the number of ways
        if (contiguousSum == d)
            numberOfWays++;
    }

    return numberOfWays;
}

// Checks if the array contains only single integer value instances
function isSingleIntArray(arr) {
    const sumOfArrayElements = arr.reduce((total, el) => {
        return total + el;
    });

    return (sumOfArrayElements == arr.length);
}
