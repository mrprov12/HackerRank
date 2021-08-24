//Day 2: Conditional Statements: If-Else
//https://www.hackerrank.com/challenges/js10-if-else/problem




function getGrade(score) {
  let grade;
  // Write your code here
  if (score >= 0 && score <= 5) {
      grade = 'F';
  } else if (score > 5 && score <= 10) {
      grade = 'E';
  } else if (score > 10 && score <= 15) {
      grade = 'D';
  } else if (score > 15 && score <= 20) {
      grade = 'C';
  } else if (score > 20 && score <= 25) {
      grade = 'B';
  } else if (score > 25 && score <= 30) {
      grade = 'A';
  }
  return grade;
}




//______________________________________________________________________________
//Day 2: Conditional Statements: Switch
//https://www.hackerrank.com/challenges/js10-switch/problem



function getLetter(s) {
  let letter;
  // Write your code here

  switch(s[0]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
          letter = 'A';
          break;
      case 'b':
      case 'c':
      case 'd':
      case 'f':
      case 'g':
          letter = 'B';
          break;
      case 'h':
      case 'j':
      case 'k':
      case 'l':
      case 'm':
          letter = 'C';
          break;
      case 'n':
      case 'p':
      case 'q':
      case 'r':
      case 's':
      case 't':
      case 'v':
      case 'w':
      case 'x':
      case 'y':
      case 'z':
          letter = 'D';
          break;
  }
  return letter;
}



//______________________________________________________________________________
//Day 2: Loops
//https://www.hackerrank.com/challenges/js10-loops/problem


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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let consonants = '';

    for (var letter of s) {
        if ('aeiou'.includes(letter)) {
            console.log(letter)
        } else {
            var next = letter + '\n';
            consonants += next;
        }
    }
    console.log(consonants);
}


function main() {
    const s = readLine();

    vowelsAndConsonants(s);
}