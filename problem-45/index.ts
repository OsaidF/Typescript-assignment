/* Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. Print the Object that’s returned to make 
sure all the information was stored correctly. */


function car (manufacturer, model, keywords, color, fwd){
    this.car_manufacturer = manufacturer;
    this.car_model = model;
    this.car_keywords = keywords,
    this.car_color = color,
    this.car_fwd = fwd
}

let car1 = new car('bmw', '2010', ['leather interior', 'cruise control', 'heated seats'], 'blue', false)
console.log(car1);
