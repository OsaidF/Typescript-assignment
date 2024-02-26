// Dinner guests: Working with one of the programs from exercise 14 through 18 print a message indicating the number of
// people you are inviting to dinner
var guests = ["Michael Jackson", "James Bond", "Arnold Schwarzenegger"];
var message = ", I would like to invite you to a banquet.";
for (var i = 0; i < guests.length; i++) {
    console.log("Hello ".concat(guests[i], " ").concat(message));
}
// ORIGINAL PROGRAM ^^
console.log("\n Number of guests invited: ".concat(guests.length));
