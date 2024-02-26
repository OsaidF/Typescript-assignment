/* Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in
 a variable called famous_person. Then compose your message and store it in a new variable called message.
  Print your message. */

let famous_quote:string = `"Experience is not what happens to you, its what you do with what happens to you."`
let famous_author:string = "Aldous Huxley"
let message:string = `${famous_author} once said: ${famous_quote}`
console.log(message);