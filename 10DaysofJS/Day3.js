//Day 3: Arrays
//https://www.hackerrank.com/challenges/js10-arrays/problem

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    nums = new Set(nums.sort((a, b) => a-b)) //convert to set to get unique values (would normally use underscore .uniq)
    nums =  Array.from(nums);
    return nums[nums.length - 2];
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);

    console.log(getSecondLargest(nums));
}

//______________________________________________________________________________
//Day 3: Try, Catch, and Finally
//


//______________________________________________________________________________
//Day 3: Throw
//