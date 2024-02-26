/* They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items. */
function Cat(name, color) {
    this.name = name;
    this.color = color;
}
var cat1 = new Cat('Tigers', 'orange');
var cat2 = new Cat('Lions', 'Yellow');
console.log("".concat(cat1.name, " are part of the cat family. They are ").concat(cat1.color, " in color."));
console.log("".concat(cat2.name, " are part of the cat family. They are ").concat(cat2.color, " in color."));
