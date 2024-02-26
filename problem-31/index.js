/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed */
var usernames = ["admin", "john", "smith", "chris", "chloe"];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] == 'admin') {
        console.log('Hello Admin, would you like to see a status report?');
    }
    else if (usernames[i] !== 'admin') {
        console.log("'Hello ".concat(usernames[i], ", thank you for logging in again'"));
    }
    else if (usernames.length > 1) {
        console.log('We need to find some users!');
    }
}
var usernames = [];
if (usernames.length > 1) {
    for (var i = 0; i < usernames.length; i++) {
        if (usernames[i] == 'admin') {
            console.log('Hello Admin, would you like to see a status report?');
        }
        else if (usernames[i] !== 'admin') {
            console.log("'Hello ".concat(usernames[i], ", thank you for logging in again'"));
        }
    }
}
else {
    console.log('\n We need to find some users!');
}
