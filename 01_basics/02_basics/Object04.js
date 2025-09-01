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

const numbers = [5,6,2,3,7];
const max = Math.max.apply(null,numbers);
console.log(max);
const min = Math.min.apply(null,numbers);
console.log(min);













