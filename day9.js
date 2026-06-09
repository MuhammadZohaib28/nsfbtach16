// OBJECTS IN JS

let carsName = ["Honda", "Toyota", "Suzuki"];

let hondaDetails = {
    carModel: "Civic",
    carYear: 2025,
    carColor: "Black",
    carEngineNumber: "HA3HE82HWQ",
    carOwner: "Wahab"
}


let toyotaDetails = {
    carModel: "Camery",
    carYear: 2025,
    carColor: "Black",
    carEngineNumber: "HA3HE82HWQ",
    carOwner: "Hamza"
}


let studentsDetails = [
    {
        fatherName: "Rizwan",
        studentName: "Hammad",
        dob: "24th July, 2015",
        sno: "kj3432",
        feeStatus: true,
        address: ["A-1888, Phase-2, GH", "C-123, Phase-2, GH"],

    },
    {
        studentName: "Iqra",
        fatherName: "Salman",
        dob: "24th July, 2006",
        sno: "kjw234233432",
        feeStatus: true
    }
]


console.log(studentsDetails)




studentsDetails.map((item) => (
    console.log(`The name of student is ${item.studentName}, and the father name is ${item.fatherName}. Fee is ${item.feeStatus ? "PAID" : "UNPAID"}`)
))