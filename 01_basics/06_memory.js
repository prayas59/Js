/*
Stack (Primitive Data Type)

We Get a copy of declared variable

1. Primitive types are copied by value. Changing one variable doesn't affect the other.
2. Each variable has its own memory space in the stack for its value.
3. The two variables are completely independent once the copy is made.

*/
let myName = "Prayas"
let anotherName = myName // copy of variable was generated and new value assigned to copy
console.log(anotherName) // Prayas 
console.log(myName) // Prayas

anotherName = "Prayas Godara"  // change made to that copy created not at myName
console.log(anotherName) // Prayas Godara
console.log(myName) // Prayas
/*
Heap (Non Primitive Data Type)

We get a refrence of original value
Non-primitive types (e.g., objects, arrays) are copied by reference, meaning the new variable points to the same memory location as the original.
*/
let userOne ={
    email : "abc@gmail.com",
    phone : "+919999"
}

let userTwo = userOne

console.log(userOne.email) //abc@gmail.com
console.log(userTwo.email) //abc@gmail.com

userTwo.email ="def@gmail.com"

console.log(userOne.email) //def@gmail.com
console.log(userTwo.email) //def@gmail.com