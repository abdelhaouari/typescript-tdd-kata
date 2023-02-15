"use strict";
exports.__esModule = true;
function fizzBuzz(n) {
    var arrFizzBuzz = new Array();
    for (var i = 1; i <= n; i++) {
        if (!(i % 3 == 0 || i % 5 == 0)) {
            arrFizzBuzz[i] = i.toString();
        }
        if (i % 3 == 0) {
            arrFizzBuzz[i] = 'Fizz';
        }
        if (i % 5 == 0) {
            arrFizzBuzz[i] = 'Buzz';
        }
        if (i % 3 == 0 && i % 5 == 0) {
            arrFizzBuzz[i] = 'FizzBuzz';
        }
    }
    return arrFizzBuzz;
}
exports["default"] = fizzBuzz;
var result = fizzBuzz(15);
console.log(result);
