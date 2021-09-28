//https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let counter = {
        "pos": 0,
        "neg": 0,
        "zero": 0
    };

    arr.forEach((num) => {
        if (num > 0) {
            counter.pos++;
        } else if (num < 0) {
            counter.neg++
        } else {
            counter.zero++
        }
    })

    console.log((counter.pos/arr.length).toFixed(6))
    console.log((counter.neg/arr.length).toFixed(6))
    console.log((counter.zero/arr.length).toFixed(6))


}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
