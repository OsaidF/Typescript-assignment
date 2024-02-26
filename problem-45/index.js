/* Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs,
such as a color or an optional feature. Print the Object that’s returned to make
sure all the information was stored correctly. */
function car(manufacturer, model, keywords, color, fwd) {
    this.car_manufacturer = manufacturer;
    this.car_model = model;
    this.car_keywords = keywords,
        this.car_color = color,
        this.car_fwd = fwd;
}
var car1 = new car('bmw', '2010', ['keyword1', 'keyword2', 'keyword3'], 'blue', false);
console.log(car1);
/*class Car {
    car_manufacturer: string
    car_model: string
    car_color: string
    fwd: boolean
    car_keywords: string[
        
    ]
    constructor(manufacturer: string, model: string, color: string, fwdy: boolean, keywords: string[]) {
        this.car_manufacturer = manufacturer;
        this.car_model = model;
        this.car_color = color;
        this.fwd = fwdy
        this.car_keywords = keywords
    }
}

*/ 
