/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array. */

 var magicians:string[] = ["David Copperfield", "Davind Blaine", "Darren Brown", "Harry Houdini", "Penn & Teller", 
 "Lance Burton"]
 
 function show_magicians(magic){
    for (let i = 0; i < magic.length; i++) {
        console.log(magic[i]); 
    }
 }
 show_magicians(magicians);