let now = new  Date();
now;

let jan01_1970 = new Date(0)
jan01_1970; //

let Dec31_1969 = new Date(-(24) * 3600 * 1000);
Dec31_1969 

// max args for Date object shown thus => new Date(year, month, date, hours, minutes, seconds, ms);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());

let bday = new Date(`1996-07-27`);
bday;
