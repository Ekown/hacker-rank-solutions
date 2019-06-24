// Divisible Sum Pairs
// (https://www.hackerrank.com/challenges/divisible-sum-pairs/problem)
function divisibleSumPairs(n, k, ar) {
    let divisiblePair = 0;

    // Loop through each element and compare it to the succeeding elements to find
    // the divisible sum pairs
    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            // Get the sum of the current pair
            let sum = ar[i] + ar[j];
            
            // Check if the sum of the pair is divisble by k, then increment
            // the divisible counter
            if (sum % k === 0)
                divisiblePair++;
        }       
    }

    return divisiblePair;
}
