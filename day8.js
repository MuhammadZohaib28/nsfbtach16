// ARRAYS IN JS

let numberOfDays = ["Monday", "Tuesday", "Wednesday"]

// console.log(numberOfDays)

for (let i = 0; i < numberOfDays.length; i++) {
    console.log(numberOfDays)
}




let namesOfFruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Grapes",
    "Pineapple",
    "Strawberry",
    "Watermelon",
    "Papaya",
    "Guava",
    "Peach",
    "Pear",
    "Cherry",
    "Kiwi",
    "Pomegranate",
    "Lychee",
    "Dragon Fruit",
    "Coconut",
    "Apricot",
    "Plum",
    "Blueberry",
    "Raspberry",
    "Melon"
];


// DRY - DO NOT REPEAT YOURSELF





namesOfFruits.sort((a, b) => b.localeCompare(a))




namesOfFruits.map((fruit) => (
    console.log(fruit)
))


const randomNumbers = [
    45,
    12,
    89,
    3,
    67,
    24,
    91,
    56,
    18,
    73,
    6,
    38,
    100,
    29,
    84,
    51,
    9,
    62,
    77,
    34
];

randomNumbers.sort((a, b) => b - a);


randomNumbers.map((num) => (
    console.log(num)
))





let filteredNumbers = randomNumbers.filter((num) => num > 73);

console.log(filteredNumbers)