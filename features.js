// 1. Arrow Function
const golden = () => console.log("this is golden!!")

golden()

// 2. Arrow function, Enhanced object literals and Template literals
const newFunction = (firstName, lastName) => ({
  firstName,
  lastName,
  fullName: () => console.log(`${firstName} ${lastName}`)
})

newFunction("Luke", "Sywalker").fullName()

// 3. Destructuring
const newObject = {
  firstName: "Han",
  lastName: "Solo",
  destination: "Tatooine",
  occupation: "Ship's Pilot"
};
const { firstName, lastName, destination, occupation } = newObject

console.log(firstName, lastName, destination, occupation)

// 4. Spread operator
const west = ["Will", "Chris", "Sam", "Holly"]

const east = ["Gill", "Brian", "Noel", "Maggie"]

const combined = [...west, ...east]

console.log(combined)

// 5. Template Literals
const planet = "earth"
const ship = "Millennium Falcon";
var before = `The star wars team get in the ${ship} to visit the ${planet} planet`

console.log(before)