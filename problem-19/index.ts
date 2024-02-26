// Dinner guests: Working with one of the programs from exercise 14 through 18 print a message indicating the number of
// people you are inviting to dinner

var guests: string[] = ["Michael Jackson", "James Bond", "Arnold Schwarzenegger"]
var message: string = ", I would like to invite you to a banquet."
for(let i=0; i <guests.length; i++){
    console.log(`Hello ${guests[i]} ${message}`);
}
// ORIGINAL PROGRAM ^^

console.log(`\n Number of guests invited: ${guests.length}`);