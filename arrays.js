
arr = []  // empty array 

arr1 = [2,5,6,7,8,9] // Array 

arr2 = ["Raju", "Admin", "admin123", true, 23]


//Index of the elements always starts from 0

console.log(arr2[6])

console.log(arr2[arr2.length-2])


arr3 = arr1.concat(arr2)

console.log(arr3)

arr4 = [5,9,2,4,7,8]

arr5 = arr4.sort()

console.log(arr5)

arr6 = ["raju", "arun", "kiran", "shabarish", "sai"]

// arr7 = arr6.sort()

// console.log(arr7)

arr6.push("pavan")

console.log(arr6)

//push() - Will add elment to array at end 

//unshift() - will add the element at biginning

arr6.unshift("sridevi")

console.log(arr6)


//pop() - Will remove elment to array at end 

//shift() - Will remove elment to array at biginning

arr6.pop()
arr6.pop()

arr6.shift()
arr6.shift()
console.log(arr6)


arr7 = arr6.reverse()

console.log(arr7)

arr8 = [5,9,2,4,7,8]
console.log(arr8)

arr9 = arr8.reverse()

console.log(arr9)

arr10 = ["raju", "arun", "kiran", "shabarish", "sai"]

arr10[1]="divya"

console.log(arr10)

str = "This is a string"

arr11 = str.split("")

console.log(arr11)

str2 = "Javascript" 

//wap to reverse the string 

revstr = str2.split("").reverse().join("")

console.log(revstr)

//wap to reverse the words 

str = "This is a simple string"

//output = string simple a is This

// wap to join the arrays 

// arr1 = [1,2]

// arr2 = [a,b,c,d,e,f,g]

// output = [1,a,2,b,c,d,e,f,g]

//wap  to get sum of elements 

//arr1 = [1,3,5, 8]

//17

const array2 = new Array("eat", "sleep");

arr2 = ["eat", "sleep"]


//console.log(arr2.indexOf("sleep"))


if(arr2.includes("exersize")){

    console.log("element is present")
}
else{
    console.log("element is not present")

}


let dailyActivities = ['sleep', 'work', 'exercise']


// const newDailyActivities = dailyActivities.slice(3);

// console.log(newDailyActivities)

// arr3 = dailyActivities.splice()

// console.log(arr3)

// es6 for of

for (let i of dailyActivities ){

    console.log(i)
}

