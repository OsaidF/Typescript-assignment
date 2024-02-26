var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Canada", "Italy", "Japan", "France", "Switzerland"];
console.log("Original order: ".concat(places, " \n"));
var places_alphabetical = __spreadArray([], places, true);
console.log("Alphabetical order: ".concat(places_alphabetical.sort(), " \n"));
console.log("Original order: ".concat(places, " \n"));
var reverse_alphabetical = __spreadArray([], places_alphabetical, true);
console.log("Reverse Alphabetical order: ".concat(places_alphabetical.reverse(), " \n"));
console.log("Original order again: ".concat(places, " \n"));
console.log("Reverse: ".concat(places.reverse(), " \n"));
console.log("Reverse again: ".concat(places.reverse(), " \n"));
console.log("Sorting the original array alphabetically: ".concat(places.sort(), " \n"));
console.log("Original array: ".concat(places, " \n"));
