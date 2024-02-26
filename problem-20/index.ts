/* Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, 
cities, languages, or anything else you’d like. Write a program that creates a list containing these items. */

var mountains: string[] = ["Everest", "K2", "Fuji", "Killimanjaro"]
//List of mountains
console.log(`List of mountains: ${mountains}\n`);

function add_mountain(new_mountain) {
    mountains.push(new_mountain);
}
// Function to add a mountain to the list
console.log('Adding a new mountain called Mont Blanc using a function.\n');
add_mountain("Mont Blanc");
//Executing the function

console.log(`New list: ${mountains}`);
//Logging the mountain list