/* Guest List: If you could invite anyone, living or deceased, to dinner, 
who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner. */

var guests: string[] = ["Michael Jackson", "James Bond", "Arnold Schwarzenegger"]
var message: string = ", I would like to invite you to a banquet."
for(let i=0; i <guests.length; i++){
    console.log(`Hello ${guests[i]} ${message}`);
}