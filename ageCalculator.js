function ageCalculator(name, birthDate, currentYear){

var age = 0;

age= currentYear - birthDate;

return name  + " is " + age + " years old.";;

  
}

console.log(ageCalculator("hina", 1981, 2021));