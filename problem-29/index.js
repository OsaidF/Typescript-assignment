/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
var favorite_fruits = ["strawberries", "oranges", "mangoes"];
if (favorite_fruits.indexOf('strawberries') !== -1) {
    console.log('You really like strawberries');
}
if (favorite_fruits.indexOf('oranges') !== -1) {
    console.log('You really like oranges');
}
if (favorite_fruits.indexOf('kiwis') !== -1) {
    console.log('You really like kiwis');
}
if (favorite_fruits.indexOf('bananas') !== -1) {
    console.log('You really like bananas');
}
if (favorite_fruits.indexOf('mangoes') !== -1) {
    console.log('You really like mangoes');
}
