// lecture 1
// const profile ={
//     username : "amit kumar meena",
//     posts : 198,
//     follower : 569,
//     following : 4,
// };

//lecture 2
// let num = prompt("enter a no.");
// if (num % 5 ==0){
//     console.log(num , "is multiple of 5");
// }
// else{
//     console.log(num , "is not multiple of 5");

// }

//lecture 3

// let num = 25;
// let usernumber = prompt("enter the no.");
// while(usernumber != num){
    // usernumber = prompt("you entered the wrong number try again!");
// }
// console.log("you entered the correct number");
// template literals (to create by doing substitution of placeholders)
// let obj = {
//     item:"pen",
//     price : 10,
// };
// let output = `the cost of ${obj.item} is ${obj.price+100} rupees`;
// console.log(output);
// let str1 = "amit kumar ";
// let str2 = "meena";
// strings are immuatable
// arrays are mutable
//question
// let fullname = prompt("enter your full name ");
// let username = "@" + fullname + fullname.length;
// console.log(username);

// lecture 4

// let array = ['bloomberg','microsoft','uber','google','ibm','netflix'];

// console.log(array);

// lecture 5

// function myfunction(a,b) {
//     s = a+b;
//     return s;
// }
// myfunction(4,6);
// let value = myfunction(765,765);
// console.log(value);
// // arrow function are modern js concept
// const arrowsum = (a,b) => {
//     console.log(a+b);
// }
// const multiplication = (x,y) => {
//     console.log(x*y);
// }
//practice
// function countvowel(str) {
//     let count = 0;
//     for(const char of str){
//         if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u" ){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countvowel("amitkumarmeena");
// for each function 
// let array  = ["pune","mumbai","delhi"];
// array.forEach((value  , idx , arr) => {
//     console.log(value.toUpperCase() , idx , arr);
// });
// practice 
// let arr = [27875,32456,4,5,6];

// arr.forEach((val ,idx )=> {
//     console.log(val*val , idx);
// });
// let arr = [27875,32456,4,5,6];

// let newarray = arr.filter((val) =>{
//     return val%2==0;
// });
// console.log(newarray);
// let arr = [1,2,3,4,5,63,7];
// const output = arr.reduce((prev , curr) => {
//     return prev > curr ? prev : curr;
// });

// console.log(output);
// practice 
// let arr = [45,90,78,99,98,94];
// let newarray = arr.filter((val) =>{
//     return val > 90;
// });

// let num = prompt("enter a number");
// let array = [];
// for(let i=1;i<=num;i++){
//     array[i-1] = i;
// }
// let ans = array.reduce((result , curr) => {
//     return result * curr;
// });
// console.log(array);
// console.log(ans); 

// lecture 6 DOM (document object model)

//console.log --> print
//console.dir --> document --> prop and methods
 
/*
DOM manipulation 
==>selecting with id
synatx = document.getElementbyid("myid") --> return value
==>selecting with class name
document.getilementbyclassname("myclass") 
==>selecting with tag
document.getelementbytagname("p"); 
querry selector
*/
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " kaise ho";

// let div = document.querySelector("div");
// console.log(div);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","good"));
console.dir(document.body.childNodes[1]);
 



 