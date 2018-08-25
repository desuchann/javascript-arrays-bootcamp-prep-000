var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var A = ['1','2','3'];
var b = 'b';

function addElementToBeginningOfArray(A, b) {
  return [b, ...A];
}

function destructivelyAddElementToBeginningOfArray(A, b) {
  A.unshift(b);
  return A;
}

function addElementToBeginningOfArray(A, b) {
  return [...A, b];
}

function destructivelyAddElementToBeginningOfArray(A, b) {
  A.push(b);
  return A;
}