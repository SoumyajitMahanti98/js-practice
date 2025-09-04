// function Car (make,model,year){
//     this.make=make;
//     this.model=model;
//     this.year=year;
// }
// if (typeof Car.prototype.displayInfo !== 'function') {
//     Car.prototype.displayInfo = function(){
//         console.log(`make:${this.make},model:${this.model},year:${this.year}`);
//     };
// }
// const myCar = new Car("Toyota","Camry",2020);
// const anotherCar = new Car("Honda","Civic",2022);
// console.log(myCar.make);
// anotherCar.displayInfo();

// const obj1 = new Object();
// obj1.name="Soumya";
// obj1.age = 24;
// console.log(obj1);

// const target = {a:1,b:2}
// const source = {b:4,c:5}
// const returnedTarget = Object.assign(target,source);
// console.log(target);
// console.log(returnedTarget===target);

// const person ={
//      isHuman :false,
//         printIntroduction:function(){
//             console.log(`My name is ${this.name}. Am I human ? ${this.isHuman}`);
            
// }
// }
// const me = Object.create(person);
// me.name="Soumya";
// me.isHuman=true;
// me.printIntroduction();

// const Obj = {
//     a: "some string",
//     b: 42
// };

// for (const [key, value] of Object.entries(Obj)) {
//     console.log(`${key} : ${value}`);
// }


// const entries = new Map([
//     ["foo","bar"],
//     ["baz",42]
// ])
// const obj = Object.fromEntries(entries);
// console.log(ob);

// let a = "1";
// let b = 1;
// Object.is(a,b);
// console.log(Object.is(a,b));

// function MyNumberType(n){
//     this.number = n;
// }
// const object = new MyNumberType(4);
// console.log(object.number+3);

// const numbers = [5,6,2,3,7];
// const max = Math.max.apply(null,numbers);
// console.log(max);
// const min = Math.min.apply(null,numbers);
// console.log(min);

// const userDetails ={
//     name : "Soumya",
//     age:24,
//     isAdctive : true
// }
// userDetails.name = "Rajesh";
// console.log(userDetails.name);

// const user = {
//     name : "Soumya",
//     age : 24,
//     isActive : true
// }
// for ( const key in user){
//     console.log(`${key}: ${user[key]}`); 
// }

// const obj = {
//     a:"one",
//     b:"two",
//     a:"three"
// }
// console.log(obj);

// const nums = {
//     a:100,
//     b:200,
//     title : "my nums"
// }
// multiplyByTwo(nums);
// function multiplyByTwo(Obj){
//     for(const key in Obj){
//         if( typeof Obj[key] == "number"){
//             Obj[key] *= 2; 
//         }
//     }
// }
// console.log(nums);

// const person = {
//     firstName : "Soumyajit",
//     lastName : "Mahanti",
//     age : 24
// }
// const {firstName,lastName}=person;
// console.log(`${firstName} ${lastName}`);

// what is JSON stringify and json parse
//  const user = {
//     name : "Soumya",
//     age : 24,
//     homeTown : "Hirbandh"
//  }
//  const jsonData = JSON.stringify(user);
//  console.log(typeof jsonData);
//  console.log(typeof JSON.parse(jsonData));

//another example of object destructuring ..
// const person = {
//     name : "Ram",
//     age : 30
// }
// const {name,age} = person;
//  console.log(`Person name is ${name} and his  age is ${age}`);

 // if i want to rename the variable while destructuring
  
//  const person = {
//     name : "Ram",
//     age : 30
// }
// const name = "Ramesh";
// const {name:myName} = person;
// console.log(name);

 //another example
//  let c = {
//     greeting : "Good Morning"
//  }
//  let d;
//  d=c;
//  c.greeting = "Good eveming";
//  console.log(d.greeting);
 

//anothe
// let person = {
//     name :"Alia"
// }
// let newPerson = [person];
// person=null;
// console.log(newPerson);

let user = {
    name : "Roadside coder",
    age : 24
}
const objClone = Object.assign({},user);
objClone.name="Soumya";
console.log(user,objClone);


 





















