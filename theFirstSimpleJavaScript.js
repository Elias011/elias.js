//------1-------
//Declare a variable x and initialize it with an integer.
let x = 5

//------2-------
//How do you round the number 7.25, to the nearest integer?
Math.round(7.25);
//------3-------
//Create a array called colors with the strings red, green and blue inside.
let color = ['green', 'red', 'blue'];
alert(color.length);
//-----4--------
//How can you find the length of the string you just created?
let color = ['green', 'red', 'blue'];
console.log(color.length);

//-----5--------
//Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type. For example
let x = 9;
let y = 'Hello';

if (typeof x == typeof y) {
  console.log('SAME TYPE');
}
else{
    console.log('DiFFERENT TYPE');
}

//-----6--------
If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
let x = 7;
console.log(x = x % 3);

//-----7--------
//Can you store multiple types in an array? Numbers and strings?
let name=['Elias', 25, 'Shikh Alshabab', 1991];

//Can you compare inifities?does 6/0 == 10/0? How can you test this?
let x = 6/0;
let y = 10/0;
if ( x == y){
alert('Equal');
}
else{
alert('Not Equal');
}
