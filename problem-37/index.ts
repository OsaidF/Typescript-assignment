/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that
 reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of 
 any size with a different message. */

 function make_shirt(size:string = 'L', text:string ='I love typescript') {
    return console.log(`The size of the t-shirt is '${size}' and the message printed on it is '${text}'`);
 }

 make_shirt('L',);
// DEFAULT MESSAGE WITH L SIZE
 make_shirt('M',)
 // DEFAULT MESSAGE WITH M SIZE
 make_shirt('XL', 'Sailor!')
 //ANY SIZE AND A DIFFERENT MESSAGE