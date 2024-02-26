var guests = ["Michael Jackson", "James Bond", "Arnold Schwarzenegger", "Angelina Jolie"];
var message = ", I would like to invite you to a banquet.";
for (var i = 0; i < guests.length; i++) {
    console.log("Hello ".concat(guests[i], " ").concat(message));
}
console.log("\n Michael Jackson died and couldnt make it to the dinner. \n");
guests.splice(0, 1);
guests.push("Batman");
for (var i = 0; i < guests.length; i++) {
    console.log("Hello ".concat(guests[i], " ").concat(message));
}
