

// reusability

// Aviod duplication of script


// function createUser(){


//    console.log("Created User with Name as Raju")
// }


// createUser()

// createUser()



function createUser(username){


   console.log("Created User with Name as "+username)
}

createUser("Raju")

createUser("Pavan")


// function AddEmployee(firstname, lastname){

//     cy.contains('PIM').click()

//     cy.contains('Add Employee').click()

//     cy.get('input[name="firstName"]').type(firstname)

//     cy.get('input[name="lastName"]').type(lastname)

//     cy.get('button[type="submit"]').click()

//     cy.contains('Successfully Saved').should("be.visible")
// }

// AddEmployee("Raju", "G")

// AddEmployee("Pavan", "Kumar")

// function without arguments / paramenters

// function with arguments / paramenters

//function with return


function add(a, b){

  return a+b
}

x = add(5,7)

console.log(x)

// createOrder(){



//     return orderNumber
// }


// orderNumber= createOrder()

// function multiplication(num1, num2){

//     console.log(num1)
//     console.log(num2)
//     console.log(num1*num2)
// }


// multiplication(5,4)

//Arrow functions for es6 

multiplication = (num1, num2) =>

    {

    console.log(num1)
    console.log(num2)
    console.log(num1*num2)
}


multiplication(3,9)


printmessage = () =>{

   console.log("function with out Parameter")
}

printmessage()


sqrootofnum = num => num*num



x = sqrootofnum(8)

console.log(x)
