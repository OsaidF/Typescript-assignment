/* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 and make a list that stores several examples. Use your list to print a series of statements about these items, 
 such as “I would like to own a Honda motorcycle.”
 */

let motorcycles: string[] = ["Honda Bike", "BMW Bike", "Kawasaki Bike :P"]
let statements: string[] = ["I would like to drive a "
                , "I would like to do a wheelie with a "
                , "I would like to run over people with a "]

motorcycles.forEach((element, index) => {
    var element2 = statements[index]
    console.log(element2 + element);
})