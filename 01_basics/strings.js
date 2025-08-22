// const name = "Soumyajit ";
// let name2 = "Avi";
// console.log(`${name.charAt(4)}`);
// console.log(`${name.charCodeAt(3)}`);
// console.log(`${name.concat(name2)}`);
// console.log(`${name.indexOf("i")}`);
// console.log(`${name.lastIndexOf("j")}`);
// console.log(`${name2.search("A")}`);
//  console.log(`${name.match("k")}`);

// console.log(`${name2.replace("Avi","Avijit")}`);
// console.log(`${name.substring(3,6)}`);
// console.log(`${name2.toLowerCase()}`);
// console.log(`${name.toUpperCase()}`);
// console.log(name.length);

//////////
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));












