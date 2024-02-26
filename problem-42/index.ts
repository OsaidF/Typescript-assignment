/* Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding 
the phrase the Great to each magician’s name. Call show_magicians() 
to see that the list has actually been modified. */

var magicians:string[] = ["David Copperfield", "Davind Blaine", "Darren Brown", "Harry Houdini", "Penn & Teller", 
"Lance Burton"]

function make_great(mage) {
    mage.forEach((element, i) => {
        mage[i] = element + ' The Great'; 
    });
}

function show_magicians(magic){
   for (let i = 0; i < magic.length; i++) {
       console.log(magic[i]); 
   }
}
//FUNCTION ADDS THE GREAT TO ALL THE MAGICIAN NAMES
make_great(magicians)

show_magicians(magicians);