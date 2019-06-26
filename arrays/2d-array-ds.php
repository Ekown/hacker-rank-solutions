// 2D Array - DS
// (https://www.hackerrank.com/challenges/2d-array/problem)
function hourglassSum($arr) {
    // Set the default values
    $highestSum = 0;
    $topSum = 0;
    $lowerSum = 0;

    // This will loop on each row
    for ($i = 0; $i <= count($arr) / 2; $i++) {
        // This will loop and each the first three columns
        for ($j = 0; $j <= count($arr[$i]) / 2; $j++) {
            // Retrieves the middle value of the row and column
            $middleValue = $arr[$i + 1][$j + 1];
            
            // Call the loop for the succeeding columns to
            // mutate the top and lower sums
            loopSucceedingColumns($arr, $i, $j, $topSum, $lowerSum);

            // If the current total sum is higher than the highest sum
            // then replace it unless it is the first total sum
            if ($highestSum < $topSum + $middleValue + $lowerSum || 
               ($i === 0 && $j === 0)) {
                $highestSum = $topSum + $middleValue + $lowerSum;
            }

            // Reset the top and lower sums to 0
            $topSum = 0;
            $lowerSum = 0;
        }            
    }

    return $highestSum;
}

// This will loop on the succeeding columns based on the 
// first three columns
function loopSucceedingColumns($arr, $i, $j, &$topSum, &$lowerSum) {
    for ($k = 0; $k < count($arr[$i]) / 2; $k++) {
        $ctr = $j;
        $topSum += $arr[$i][$ctr + $k];
        $lowerSum += $arr[$i + 2][$ctr + $k];
    }
}
