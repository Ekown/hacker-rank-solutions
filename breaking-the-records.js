// Breaking the Records 
// (https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem)
function breakingRecords(scores) {
    // Set the lowest and highest records as the first score.
    let lowestRecords = [scores[0]];
    let highestRecords = [scores[0]];

    for (let i = 1; i < scores.length; i++) {
        // Add the score to the lowest record 
        // if the current score is lower than the lowest record.
        if (scores[i] < lowestRecords[lowestRecords.length - 1])
            lowestRecords.push(scores[i]);

        // Add the score to the highest record 
        // if the current score is higher than the highest record.
        if (scores[i] > highestRecords[highestRecords.length - 1])
            highestRecords.push(scores[i]);
    }

    // Return an array containing the length of the highest and lowest records
    // minus the first element, as it served as the baseline, respectively.
    return [highestRecords.length - 1, lowestRecords.length - 1];
}
