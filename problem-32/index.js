/* Checking Usernames: Do the following to create a program that simulates how websites ensure
that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users.
Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used.
If it has, print a message that the person will need to enter a new username.
 If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive.
 If 'John' has been used, 'JOHN' should not be accepted. */
var current_users = ["admin", "john", "smith", "chris", "chloe"];
var new_users = ["sam", "john", "smith", "robert", "mike"];
current_users.forEach(checkDuplicate);
function checkDuplicate(current_users) {
    for (var index = 0; index < new_users.length; index++) {
        if (current_users == new_users[index])
            return console.log("".concat(new_users[index], " is already taken!"));
    }
    ;
}
//loops new users array inside a foreach current users loop to look for duplicates
