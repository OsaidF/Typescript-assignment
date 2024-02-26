var guests = ["Michael Jackson", "James Bond", "Arnold Schwarzenegger"];
var message = ", I would like to invite you to a banquet.";
for (var i = 0; i < guests.length; i++) {
    console.log("Hello ".concat(guests[i], " ").concat(message));
}
