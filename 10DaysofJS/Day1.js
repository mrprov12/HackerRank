//Day 1: Arithmetic Operators
//https://www.hackerrank.com/challenges/js10-arithmetic-operators/problem



/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
  let area;
  // Write your code here
  area = length * width;
  return area;
}

/**
*   Calculate the perimeter of a rectangle.
*
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
  let perimeter;
  // Write your code here
  perimeter = 2 * (length + width);
  return perimeter;
}




//______________________________________________________________________________
//Day 1: Functions
//https://www.hackerrank.com/challenges/js10-function/problem


/*
 * Create the function factorial here
 */
let factorial = (inputNum) => {
  let product = 1;
  for (var i = inputNum; i > 0; i--) {
      product *= i;
  }
  return product;
}




//______________________________________________________________________________
//Day 2: Let and Const
//https://www.hackerrank.com/challenges/js10-let-and-const/problem



function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const PI = Math.PI;;
  const r = readLine();

  // Print the area of the circle:
      console.log(PI * Math.pow(r, 2))

  // Print the perimeter of the circle:
      console.log(2 * PI * r)
