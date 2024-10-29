age=prompt("enter the age");
a=(age>12)? "Child":
(age<=13 || age>=19)? "Teen":
(age<=20 || age>=64)? "Adult":"senior";
// (age=65 & age>65)?"Senior":
console.log(a);