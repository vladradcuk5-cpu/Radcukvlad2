let age = prompt("Ваш вік:");
age = +age;

if (age < 18) {
  alert("Вам заборонено вхід");
} else if (age <= 65) {
  alert("Ласкаво просимо!");
} else {
  alert("Будь ласка, будьте обережні!");
}