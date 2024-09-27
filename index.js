// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;



let isDivis =  (n1 % 5 == 0 && n2  % 5 == 0 && n3  % 5 == 0 && n4  % 5 == 0 )
console.log(isDivis)
  
let operation = (n1 > n4)
console.log(operation)

let sub = n1-n2
let mult = sub * n3
let remainder = mult % n4

console.log(remainder)

const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd)

const isOver25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(isOver25)

const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique)

const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;
console.log(isValid)


const distance = 1500
const milesperHour1 = 55
const milesperHour2 = 60
const milesperHour3 = 75
const milesperGallon = 30
const milesperGallon2 = 28
const milesperGallon3 = 23

const budget = 175
const costofFuel = 3

const expression1 = distance / milesperGallon // 1500/ 30 50 gallons of fuel 
const expression2= distance / milesperGallon2 
const expression3 = distance / milesperGallon3


console.log(`at ${milesperHour1} milesperHour we get ${expression1} GallonsofFuel, at ${milesperHour2} milesperHour we get ${expression2} GallonsofFuel, at ${milesperHour3} milesperHour3 we get ${expression3} GallonsofFuel`)


const expense = expression1 * 3
const expense2 = expression2 * 3
const expense3 = expression3 * 3 


console.log(`for first expense we are under budget by $ ${expense}, for second we are under budget by $ ${expense2}, for third we cannot satisfy because it costs $ ${expense3} `)

const TripTime = distance / milesperHour1
const TripTime2 = distance / milesperHour2
const TripTime3 = distance / milesperHour3

console.log(`First trip takes ${TripTime} hours, second trip takes ${TripTime2} hours, third trip takes ${TripTime3} hours`)



