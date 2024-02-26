/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */

const places: string[] = ["Canada", "Italy", "Japan", "France", "Switzerland"]

console.log(`Original order: ${places} \n`);
var places_alphabetical:string[] = [...places]
console.log(`Alphabetical order: ${places_alphabetical.sort()} \n`);
console.log(`Original order: ${places} \n`);
var reverse_alphabetical:string[] = [...places_alphabetical]
console.log(`Reverse Alphabetical order: ${places_alphabetical.reverse()} \n`);
console.log(`Original order again: ${places} \n`);
console.log(`Reverse: ${places.reverse()} \n`);
console.log(`Reverse again: ${places.reverse()} \n`);
console.log(`Sorting the original array alphabetically: ${places.sort()} \n`);
console.log(`Original array: ${places} \n`);
// VERY CONFUSING BUT I GOT IT :D