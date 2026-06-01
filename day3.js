console.log("DAY 3 JAVASCRIPT")

// IF ELSE CONDITION 

let citizenAge = 18;


if (citizenAge >= 18) {
    console.log("APP CNIC KAY LIYE ELIGIBLE HAIN")
} else {
    console.log("APP CNIC KAY LIYE ELIGIBLE NAHI HAIN")
}






let studentPercentage = 1;


if (studentPercentage > 100) {
    console.log("Marks cannot exceed 100, please enter marks less than or equals to 100.")
} else if (studentPercentage >= 80) {
    console.log(`Student Percetage is ${studentPercentage}. And Student got A-0NE Grade`)
} else if (studentPercentage >= 70) {
    console.log(`Student Percetage is ${studentPercentage}. And Student got A Grade.`)
} else if (studentPercentage >= 60) {
    console.log(`Student Percetage is ${studentPercentage}. And Student got B+ Grade.`)
} else if (studentPercentage >= 50) {
    console.log(`Student Percetage is ${studentPercentage}. And Student got C Grade.`)
} else if (studentPercentage < 0) {
    console.log("Marks cannot be less than 0, please enter marks greater than or equals to 0.")
} else {
    console.log(`Student Percetage is ${studentPercentage}. And Student got F Grade.`)
}

