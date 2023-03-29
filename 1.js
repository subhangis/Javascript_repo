// console.log("hellow");
//         //var  myname = "subhangi"
//          var myname = 24.00008
//          //var a = null
//          var a = undefined
// console.log(myname);
// console.log(typeof(myname));
// console.log(a);
// console.log(typeof(a));
// //String concatination
// console.log (10 + "20");// concatinate
// console.log(9-"5");//1st bug in js
// console.log("java" + " ")
// console.log(" "+" ")
// console.log("vinod"- "thapa");
// console.log(true+false);
// console.log(false+true);
// //program to swap two number without 3rd variable
// var a=10
// var b = 20
// a= a+b
// b = a-b
// a= a-b
// console.log(a);
// console.log(b);
// var l=4,b=6,r=2;
// var PI=3.14;
// var area= "circle";
// switch(area){
//    case 'square':
//     console.log("area of square is:"+ r*r);
//     break;
//     case 'circle':
//     console.log("area of circle is:"+ PI*r*r);
//     break;
//     default:
//         console.log("enter the correct data");

// }

    
// Function in java Script

// function sum(a,b){
//         var total = a+b;
//         console.log(total)
// }
//sum(6,4);

//Anonyomus function
// var multiple = function(a,b){
//         console.log("the sum of two number is"+ multiple());
//         //var a=4,b=2;
//        // return total = a+b;
        
        
// }
// //console.log("The multiplication of two number is " + multiple)
// multiple(4,2);

// function biodata(){
//         let myname = "subhangi"
//         console.log(myname);
//         const a =4

// }
// biodata();
// //Default parameters and also anonyomous function
//  var a = function(a,b=4){
//         return a*b
// }
// console.log("multiplication of  two numbers is " +a(3));

// //Arrow function
// const sum = (a,b)=> a*b;
// console.log("multiplication of two number is "+sum(4,5));
// Array in java Script
//var student = ["rohit","rohan","ram","rahul"];
// console.log(student);
// FOR IN LOOP IN JS
// for(let element in student){
//         console.log(element)
// }
// FOREACH LOOP IN JS
// student.forEach(function(element,index,arry){
//         console.log(element);
// })

//Methods in array

// var animals =['cow','goat','lion','tiger'];
// //console.log(animals.indexOf("goat"))
// console.log(animals.lastIndexOf());
// animals.push('fox');
// console.log(animals);
// //console.log(count);
// animals.unshift('abn','klm','tylo');
// console.log(animals)

// let arr = [2,4,5];
// let sum =arr.reduce((accumulator,curElem,index,arr)=>{
//         return accumulator *= curElem
// })
// console.log(sum);
//square root of the array element

// let arr = [25,64,36,49];
// let arrsqr = arr.map((curElem)=>Math.sqrt(curElem))
// console.log(arrsqr);

// let arr = [5,9,6,4,2,1];
// let number = arr.map((curElm *2).filter((curElem)=>curElem>10).reduce((accumulator,curElem)=> {
//         return accumulator += curElem;
// console.log(arr);
// }))

const months = ['jan','feb','march','april',];

const indexOfMonth= months.indexOf('march');

if(indexOfMonth !== -1){

const updateMonth = months.splice(indexOfMonth,4);
console.log(months);
}
else{
        console.log('data is not found')
}
// map method
//** the beauty of map function is to mutate an array without disturbing the original array
 var arr1 = [3,6,8,9,5];
//  var arrindex = arr1.map((curElem,index,arr)=>{
//         return curElem>2;
//  })
//  console.log(arr1)
//  console.log(arrindex)

var number = arr1.map((curElem,index,arr)=>{
     return ` index of ${index} contain ${curElem} of the given ${arr}`
})

console.log(number)

