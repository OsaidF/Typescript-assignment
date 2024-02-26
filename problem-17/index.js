var guests = ["Michael Jackson", "James Bond", "Arnold Schwarzenegger", "Angelina Jolie"];
var message = ", I would like to invite you to a banquet.";
for (var i = 0; i < guests.length; i++) {
    console.log("Hello ".concat(guests[i], " ").concat(message));
}
console.log("\n \t Michael Jackson died and couldn't make it to the dinner. \n");
guests.splice(0, 1);
guests.push("Batman");
for (var i = 0; i < guests.length; i++) {
    console.log("Hello ".concat(guests[i], " ").concat(message));
}
console.log("\n  \t Good news! Ihave found a bigger table and I can now invite three more people! \n");
guests.unshift("Spiderman");
// ADDING A GUeST TO THE BEGINNING
guests.splice(3, 0, "Catwoman");
guests.join();
// ADDING A GUEST TO THE  MIDDLE BY SPLICING, INSERTING AND THEN JOINING IT BACK
guests.push("Myself");
// FINALLY, PUSH AUTOMATICALLY ADDS ITEM TO THE END OF THE ARRAY
for (var i = 0; i < guests.length; i++) {
    console.log("Hello ".concat(guests[i], " ").concat(message));
}
console.log("\n  \t Bad news! The tabble has burned and now I can only invite two people to eat on the floor! \n");
var removed_guest = guests.pop();
console.log("".concat(removed_guest, " you are no longer invited to the dinner party! \n"));
var removed_guest = guests.pop();
console.log("".concat(removed_guest, " you are no longer invited to the dinner party!"));
var removed_guest = guests.pop();
console.log("".concat(removed_guest, " you are no longer invited to the dinner party!"));
var removed_guest = guests.pop();
console.log("".concat(removed_guest, " you are no longer invited to the dinner party!"));
var removed_guest = guests.pop();
console.log("".concat(removed_guest, " you are no longer invited to the dinner party! \n"));
var message = "You are still invited to the dinner!";
for (var i = 0; i < guests.length; i++) {
    console.log("Hello ".concat(guests[i], " ").concat(message));
}
