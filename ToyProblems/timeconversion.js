//https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let hour = s.slice(0, 2);
    let min = s.slice(3, 5);
    let sec = s.slice(6, 8);

    let timeOfDay = s.slice(s.length - 2, s.length);

    if (timeOfDay === 'AM') {
        console.log('AM')
        hour === '12' ? `00:${min}:${sec}` : `${hour}:${min}:${sec}`;
    } else if (timeOfDay === 'PM') {
        let alt = `${Number.parseInt(hour)+12}:${min}:${sec}`
        hour === '12' ? `${hour}:${min}:${sec}` : alt;
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
