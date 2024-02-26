/* More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program 
informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 

• Print a new set of invitation messages, one for each person in your list.

*/

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