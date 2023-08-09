

let $person_name : string = "Muhammad Omair Khan";

console.log(`Name in upper case form => ${$person_name.toUpperCase()}`);
console.log(`Name in lower case form => ${$person_name.toLowerCase()}`);

let $name = $person_name.split(" ");
let title_case = "";

for (let i=0; i < $name.length; i++ ) {
   title_case += $name[i].charAt(0).toUpperCase() + $name[i].slice(1).toLowerCase() + " "
}

console.log(title_case);