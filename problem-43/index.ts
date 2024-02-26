/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
with a copy of the array of magicians’ names. Because the original array will be unchanged, 
return the new array and store it in a separate array. Call show_magicians() with each array 
to show that you have one array of the original names and one array with the Great added to 
each magician’s name. */

var magicians:string[] = ["David Copperfield", "Davind Blaine", "Darren Brown", "Harry Houdini", "Penn & Teller", 
"Lance Burton"]
var greatMagicians = [...magicians]

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
make_great(greatMagicians)

//UNEDITED ARRAY
show_magicians(magicians);

//EDITED GREAT ARRAY
show_magicians(greatMagicians);