let myYoutubeName = "ayushyadavz"; // Primitive type stored in the Stack.
let anotherName = myYoutubeName;   // A copy of the value is created in the Stack.
anotherName = "amanyadavz";        // Changing the copy does not affect the original.

console.log(myYoutubeName); // Output: ayushyadavz (Original value remains unchanged)
console.log(anotherName); 
////
let userOne = {
    email:"soumya@123@gmail.com",
    upi:"soumya@ybl"
}
let userTwo = userOne;
userTwo.email="ayush@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);