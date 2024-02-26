/* Cities: Write a function called describe_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan.
Give the parameter for the country a default value. Call your function for three different cities,
at least one of which is not in the default country. */
function describe_city(country, city) {
    if (country === void 0) { country = 'Pakistan'; }
    if (city === void 0) { city = 'Karachi'; }
    return console.log("".concat(city, " is in ").concat(country));
}
describe_city();
// DEFAULT CITY AND COUNTRY
describe_city('Pakistan', 'Lahore');
// DEFAULT COUNTRY
describe_city('Japan', 'Tokyo');
// UNIQUE CITY AND COUNTRY
