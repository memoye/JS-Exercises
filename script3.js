// let stringName = "Waliyah ";
// console.log(stringName.indexOf("a"));
// console.log(stringName.lastIndexOf("a"));
// console.log(stringName.toLowerCase());
// console.log(stringName.toUpperCase());
// console.log(stringName.replace("iyah", "e"));
// console.log(stringName.trim());
// console.log(stringName.slice(1, 5)); 

// let word = "Javascript";
// console.log(word.slice(4).toUpperCase());

let language = "JavaScript";
language.replace('J', 'Q');
language.slice(0,5);
console.log(language.slice(0,5));

// console.log(language.slice(1,6));

// let org = "  The LaunchCode Foundation ";
// let trimmed = org.trim();

// console.log(trimmed);
// console.log("\"The dog's favorite toy is a stuffed hedgehog,\" said Chris");

// let pluralNoun = "money";
// let nom = "Wale";
// let verb = "spend";
// let adjective = "colorful";
// let color = "green";

// console.log(`JavaScript provides a ${color} collection of tools — including ${adjective}  syntax and ${pluralNoun} — that allows ${nom} to ${verb} with strings.`);

let frameworks = ["React", "Angular", "Vue"];

console.log(frameworks.includes("Vue"));
console.log(frameworks.indexOf("react"));
console.log(frameworks.reverse()); //reverse order
console.log(frameworks.sort()); //sorts in alphabetical order
console.log(frameworks.pop()); //removes from the back and returns the removed value
console.log(frameworks.push("Ember")); //adds value at the end and logs the length

console.log(frameworks.shift()); //removes the first element and returns the removed value

console.log(frameworks.unshift("Ember")); //adds to the front

console.log(frameworks);

console.log(frameworks.splice(1, 2, "DotNet", "Tailwind")); //start from index 1, replace 2 values with the provided values. To avoid deleting values, make the second arg 0

let arr = ["b", 21, 4, "a"];
console.log(arr.sort())


let school = [
  ["Science", "Computer", "Art"],
  ["Jones", "Willoghby", "Rhodes"]
];

school[1].push("Holmes");
console.log(school);

