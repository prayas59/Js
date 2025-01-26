const myname = "Prayas"

const repoCount = 50

console.log(myname+" "+repoCount+"value");   // not a gppd method
console.log(`${myname} ${repoCount} value`)  // better and readable

const gameName = new String("Godara")

console.log(myname[1]) //r
console.log(gameName[1]) //o

console.log(myname.length) //6
console.log(gameName.charAt(2)) // d
console.log(gameName.indexOf('a')) // a (first came)
console.log(myname.toUpperCase())  // Don't change the original value
console.log(gameName.__proto__)

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