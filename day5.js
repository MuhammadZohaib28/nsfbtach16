let number = 7;

// == - comparision operator
// === - comparision operator

if (number % 2 === 0) {
    console.log("Even number")
} else {
    console.log("Odd number")
}


let usama = 42;

let zohaib = "42"


let answer = usama == zohaib

console.log(answer, "YEH TRIPPLE EQUALS TO KA ANSWER HAI")




for (let i = 1; i <= 23; i++) {

    if (i % 2 === 0) {
        console.log(`${i} - EVEN NUMBER`)
    } else {
        console.log(`${i} - ODD NUMBER`)
    }

}



// ARRAYS IN JAVASCRIPT
// DRY - DONOT REPEAT YOURSELF
let std1 = "Hamza"
let std2 = "Maria"
let std3 = "Farhan"



let studentsName = ["Hamza", "Maria", "Danish", "Taha", "Usama", "Bisma", "Ayan", "Hammad"]


console.log(studentsName.length)


// console.log(studentsName[0])
// console.log(studentsName[1])
// console.log(studentsName[2])




for(let i = 0; i < studentsName.length; i++){
    console.log(studentsName[i])
}



studentsName.push("Sadaf", "Zubair")



studentsName.pop();



for(let i = 0; i < studentsName.length; i++){
    console.log(studentsName[i])
}


