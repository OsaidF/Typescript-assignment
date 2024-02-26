/* They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items. */

function Cat( name:string, color:string) {
    this.name = name;
    this.color = color;
}
// A CONSTRUCTOR FUNCTION THAT TAKES NAME AND COLOR AS ARGUMENT AND CREATES A CAT OBJECT

var cat1 = new Cat('Tigers', 'orange')
var cat2 = new Cat('Lions', 'Yellow')
//EXECUTING THE FUNCTION

console.log(`${cat1.name} are part of the cat family. They are ${cat1.color} in color.`);
console.log(`${cat2.name} are part of the cat family. They are ${cat2.color} in color.`);
//VIOLA