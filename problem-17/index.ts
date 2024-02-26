/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you 
can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. 
Each time you pop a name from your list, print a message to that person letting them know 
you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list 
to make sure you actually have an empty list at the end of your program. */

var guests: string[] = ["Michael Jackson", "James Bond", "Arnold Schwarzenegger", "Angelina Jolie"]
var message: string = ", I would like to invite you to a banquet."
for(let i=0; i <guests.length; i++){
    console.log(`Hello ${guests[i]} ${message}`);
}

console.log("\n \t Michael Jackson died and couldn't make it to the dinner. \n");

guests.splice(0, 1);
guests.push("Batman");

for(let i=0; i <guests.length; i++){
    console.log(`Hello ${guests[i]} ${message}`);
}

console.log("\n  \t Good news! Ihave found a bigger table and I can now invite three more people! \n");

guests.unshift("Spiderman");
// ADDING A GUeST TO THE BEGINNING
guests.splice(3,0, "Catwoman")
guests.join()
// ADDING A GUEST TO THE  MIDDLE BY SPLICING, INSERTING AND THEN JOINING IT BACK
guests.push("Myself")
// FINALLY, PUSH AUTOMATICALLY ADDS ITEM TO THE END OF THE ARRAY

for(let i=0; i <guests.length; i++){
    console.log(`Hello ${guests[i]} ${message}`);
}

console.log("\n  \t Bad news! The tabble has burned and now I can only invite two people to eat on the floor! \n");

var removed_guest = guests.pop();
console.log(`${removed_guest} you are no longer invited to the dinner party! \n`);

var removed_guest = guests.pop();
console.log(`${removed_guest} you are no longer invited to the dinner party!`);

var removed_guest = guests.pop();
console.log(`${removed_guest} you are no longer invited to the dinner party!`);

var removed_guest = guests.pop();
console.log(`${removed_guest} you are no longer invited to the dinner party!`);

var removed_guest = guests.pop();
console.log(`${removed_guest} you are no longer invited to the dinner party! \n`);

var message:string = "You are still invited to the dinner!"

for(let i=0; i <guests.length; i++){
    console.log(`Hello ${guests[i]} ${message}`);
}

// ITS REALLY MESSY NOW LOL
