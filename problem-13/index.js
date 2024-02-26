var motorcycles = ["Honda Bike", "BMW Bike", "Kawasaki Bike :P"];
var statements = ["I would like to drive a ",
    "I would like to do a wheelie with a ",
    "I would like to run over people with a "];
motorcycles.forEach(function (element, index) {
    var element2 = statements[index];
    console.log(element2 + element);
});
