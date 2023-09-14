// let counter = 1;

// while (counter <= 5) {
//   console.log(counter);
//   counter++;
// }

// for (let index = 0; index < 5; index++) {
//     console.log(index);

// }

// const students = ["a", "b"];
// counter = 0 ;
// while (counter < students.length)
// {
// console.log(students[counter]);
// counter++
// }

// for (let index = 0; index < students.length; index++) {

//     console.log(students[index])

// }

// Q1

for (let index = 0; index <= 10; index++) {
  console.log(index);
}

//Q2
for (let index = 0; index <= 20; index++) {
  if (index % 2 == 0) console.log(index);
}

//Q3 tion 3: Write a while loop in
//JavaScript that calculates the sum of
// all integers from 1 to 100.

console.log("Q3");
let i = 1;
let sum = 0;
while (i <= 100) {
  sum += i;
  i++;
}
console.log(sum);

console.log("Q4");

//Question 4 🌶️🌶️🌶️: Write a for loop in
// JavaScript that iterates through an array
// of numbers and calculates their sum.

const addnum = [1, 2, 3, 4, 5];
let element = 0;
for (let index = 0; index < addnum.length; index++) {
  element += addnum[index];
}

console.log(element);
