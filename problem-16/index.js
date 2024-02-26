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
guests.splice(3, 0, "Catwoman");
guests.join();
guests.push("myself");
for (var i = 0; i < guests.length; i++) {
    console.log("Hello ".concat(guests[i], " ").concat(message));
}
