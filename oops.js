

// class Employee{

//       getdeatils(value1, lname, place){

//            this.firstname = value1
//            this.lastname = lname
//            this.place = place
//       }

//       displaydetails(){
     
//          console.log(this.firstname, this.lastname, this.place)
          
//       }
// }

// const emp1 = new Employee()

// emp1.getdeatils("Raju", "G", "Blr")

// emp1.displaydetails()


// class A{

   
//     m1(){

//         console.log("this is method1")
//     }

    
//     m2(){

//         console.log("this is method2")
//     }

    
//     m3(){

//         console.log("this is method3")
//     }
// }


// class B extends A{

    
//     m4(){

//         console.log("this is method4")
//     }

    
//     m5(){

//         console.log("this is method5")
//     }

    
//     m6(){

//         console.log("this is method6")
//     }
// }


// class C extends B{

    
//     m7(){

//         console.log("this is method7")
//     }

    
//     m8(){

//         console.log("this is method8")
//     }

    
//     m9(){

//         console.log("this is method9")
//     }
// }

// const raju = new C()

// raju.m4() // B

// raju.m1() //A

// raju.m2() //A

// raju.m9() //C



// class A{

   
//     m1(){

//         console.log("this is method1")
//     }

    
//     m2(){

//         console.log("this is method2")
//     }

    
//     m3(){

//         console.log("this is method3")
//     }
// }



//  A.prototype.x = 10

// A.prototype.m4 = function (){

//     console.log("this is method4")
// }

// const obja1 = new A()

// const obja2 = new A()

// console.log(obja1.x)

// obja1.m4()

// console.log(obja2.x)

// obja2.m4()


//================================



class A{

   
    m1(){

        console.log("this is method1")
    }

    
    m2(){

        console.log("this is method2")
    }

    
    m3(){

        console.log("this is method3")
    }

    add(n1, n2){

        console.log(n1)
        console.log(n2)
        console.log(n1+n2)
    }
}


class B extends A{

    
    m1(){

        console.log("this is method4")
    }

    
    m5(){

        console.log("this is method5")
    }

    
    m6(){

        console.log("this is method6")
    }

    add(n1, n2, n3){

        console.log(n1)
        console.log(n2)
        console.log(n3)
        console.log(n1+n2+n3)
    }
}


const pavan = new A()

pavan.m1()

pavan.add(4,5, 6)



// Call back 


// Async , await()

// Maps 

// Sets

// str = "madam"


// str1 = "army"

// str2 = "mary"


// 70 %
// 30%