let currentDate = new Date();
//console.log(currentDate);

let millisconds = new Date(1680458553279);
console.log(millisconds);
let dateString = new Date("Aug 29 2019 08:34:00");
//console.log(dateString);

let componetDate = new Date(1998, 3);
//console.log(componetDate);

currentDate.setFullYear(1999);
//console.log(currentDate.getFullYear());

console.log(
    currentDate.toLocaleString('default',{weekday: 'long'
})
);

let today = new Date();
console.log(today.getDate());

let hour = today.getHours();
let min = today.getMinutes();
console.log(`${hour}:${min}`);

let day = today.toLocaleString('defualt', {weekday: 'long'});
console.log(day);