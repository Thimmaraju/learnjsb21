

const car ={

    AT : true,

    Model: 2015,

    Manufacturer : "Maruthi Suzuki",


}


console.log(car.Manufacturer)

const credentials = {

    username:"Admin",
    password:"admin123"
}

//===================================
console.log(car.Model)

console.log(car['Model'])


console.log(typeof(car))

console.log(typeof(car.Manufacturer))

console.log(typeof(car.Model))

const x = 20

//x=40


const student = {

    firstname : "Raju",
    lastname : "G",
    Rnumber: 418
}

// student['lastname']= "Govindappa"

// console.log(student.lastname)

// console.log(student.place)

// student['place'] ="Bangalore"

// console.log(student.place)

// delete student.lastname

// console.log(student.lastname)


for (let i in student){


    console.log("loop started ")
    console.log(student[i])
    console.log("loop end ")
}


const menuitems ={

    menu1 :"Admin",
    menu2: "PIM",
    menu3: "Leave",
    menu4: "Time",
    menu5: "Recruitement",
    menu6 : "My Info"
}


for(let i in menuitems){

    console.log(menuitems[i])
}