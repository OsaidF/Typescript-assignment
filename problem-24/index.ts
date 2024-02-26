/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one
 False result for each of the following:

• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
 and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */

let user = 'john';

console.log(user != 'john');
console.log(user == 'john');

let car = 'ferrari';

console.log(car == 'FERRARI'.toLowerCase());
console.log(car == 'FERRARI');
// equals with case sensitive

let x = 10;
let y = 3;

console.log(x == y);
console.log(x != y);
console.log(x > y);
console.log(x < y);
console.log(x <= y);
console.log(x >= y);
// logical operators check

const num_array = [1,2,3]
let n = 3;
console.log(num_array.indexOf(n) !== -1);
let m = 4;
console.log(num_array.indexOf(m) !== -1);
// Checking wether an item is in an array.
