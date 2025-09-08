// for(let i=0;i<=10;i++){
//     const element = i;
//     if(element==5){
//         console.log("five is best number");
//     }
//     console.log(element); 
// }

// for(let i=1;i<=10;i++){
//     console.log(`this is outer loop ${i}`);
//     for(let j=1;j<=10;j++){
//         // console.log(`inner loop value is ${i} and outer loop value is ${j}`);
//         console.log(`${i} * ${j} = ${i*j}`);
        
//     }
// }

// const array = ["a","b","c", "d", "e"];
// console.log(`array length is : ${array.length}`);

// for(let i=0;i<array.length;i++){
//       const element = array[i];
//       console.log(element);
// }

// break 
// for(let i=1;i<=20;i++){
//     if(i==5){
//         console.log("five is best number");
//         break;
//         // continue;
//     }
//     console.log(` ${i}`);
    
// }

// Write a program to find maximum between three numbers.
let a = 20;
let b = 25;
let c = 15;

let max;
if(a>=c && a>=b) {
   max=a;
}else if(b>=a && b>=c){
    max=b;
}else{
    max=c;
}
console.log("the maximum number is : " + max);
