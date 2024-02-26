var user = "iMran khAn";
var titlecase = user.split(" ").map(function (name) { return name[0].toUpperCase() + name.substring(1).toLowerCase(); }).join(" ");
console.log(titlecase);
console.log(user.toUpperCase());
console.log(user.toLowerCase());
