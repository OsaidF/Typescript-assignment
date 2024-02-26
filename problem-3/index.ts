/* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
  uppercase, and titlecase. */

let user:string = "iMran khAn";
let titlecase = user.split(" ").map((name:string)=>name[0].toUpperCase()+name.substring(1).toLowerCase()).join(" ");
console.log(titlecase);
console.log(user.toUpperCase());
console.log(user.toLowerCase());
