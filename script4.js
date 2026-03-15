let name = "Влад";
let birthYear = 2009;
let city = "Луцьк";

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
console.log("Вік:", age);

if (age >= 0 && age <= 12) {
    console.log(name + " — дитина");
} else if (age >= 13 && age <= 17) {
    console.log(name + " — підліток");
} else if (age >= 18 && age <= 64) {
    console.log(name + " — дорослий");
} else {
    console.log(name + " — літня людина");
}

let capitalCity = "Київ";
if (city.trim().toLowerCase() === capitalCity.toLowerCase()) {
    console.log("Ви живете у столиці країни");
} else {
    console.log("Ви не живете у столиці країни");
}
