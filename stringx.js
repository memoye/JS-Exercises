let num = 123.45;
num = String(num);
console.log(num);
console.log(num.length);


if (num.includes(".")) {
    num = num.replace(".", "").length;
} else {
   num = stringNum.length;
}

console.log(num);



let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";
dna = dna.trim().toUpperCase();
console.log(dna);

dna = dna.replace("GCT", "AGG");
console.log(dna);

if (dna.indexOf("CAT" !== -1)){
    console.log("CAT found");
} else {
    console.log("CAT NOT found");
}


let dnaArr = dna.split("-")[4];  //.slice(4, 5);
console.log(dnaArr);


console.log(`The DNA strand is ${dna.length} characters long.`);

let str = "JavaScript";
let str1 = str.slice(0, 1);
let newStr = str1 + str.slice(4, 5);

console.log(newStr);
console.log(str);

newStr = str.replace("ava", "").replace("cript", "");
console.log(newStr);

let titletxt = "title case";

titletxt = titletxt.replace(titletxt[0], titletxt[0].toUpperCase()).replace(titletxt[6], titletxt[6].toUpperCase());

console.log(titletxt);