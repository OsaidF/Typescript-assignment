/* Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

• Modify your program to print a statement about each animal, such as A dog would make a great pet.

• Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet! */
var animals = ['cats', 'dogs', 'hamsters'];
var statement = [' are great house pets', ' are very cute creatures', ' are always loyal to you!'];
for (var i = 2; i < animals.length; i++) {
    for (var i_1 = 0; i_1 < statement.length; i_1++) {
        console.log("".concat(animals[i_1]).concat(statement[i_1]));
    }
}
console.log('These animals are commonly found as house pets!');
