// let biodata = {//object
//     myname: "subhangi singh",//variables
//     myage: 26,

//     getdate: function (){//method
//         console.log(`my name is ${biodata.myname}and my age is ${biodata.myage}`);
//         biodata.getdate;
//     }
   
// }
// //console.log(biodata.myname);
// //console.log(biodata.getdate());
// biodata.getdate();

//object inside object
// let biodata={ //object
//     myname: { //object
//         fname: "gullu",
//         lname: "devi",
//     },
//     myage: 24,
//     getdate(){
//         console.log(`my name is ${biodata.myname.lname} and my age is ${biodata.myage}`);
//         //biodata.getdate();
//     }
// }
// biodata.getdate();
//console.log(biodata.myname.fname);
//console.log(this.alert('awesome'));

//  function myname(){
//    console.log(this)
// }
// myname();

// let myname = "subhangi";
// function getname(){
//   console.log(this.myname)
// }
// getname();//output is window

// const obj ={
//   myage:26,
//   myname(){
//   console.log(this.myage);
//   }
// }
// obj.myname();//output is 26

// const obj ={
//   myage:26,
//   myname:()=>{
//   console.log(this.myage);
//   }
// }
// obj.myname();//output is window

// let biodata={
//   myname:{
//     fname:"subhangi",
//     lname:"singh"
//   },
//   myage:26,
//   getdata(){
//     console.log(`my name is ${ this.myname.fname } and my age is ${this.myage}`)
//   }
// }

//   biodata.getdata();

  // Array destructuring
  //const biodata = ["subhangi","singh", 26];
  // let myfname = biodata[0];
  // let lsname = biodata[1];
  // let age = biodata[1];
  // console.log(myfname)
  //instead of that we can write
  // let[fname,lsname,age]=biodata;
  // console.log(fname);

  // 
  // let[fname,lsname,age,mydegree='Btech']=biodata;
  // console.log(mydegree);

  // Object destructuring
  const biodata = {
    fname: "subhangi",
    lname: "singh",
    age:26
  }
  // 
  //instead of that we can write
   //let{fname,lsname,age}=biodata;
   //console.log(fname);

  // 
  // let{fname,lsname,age,mydegree='Btech'}=biodata;
  // console.log(mydegree);
  
//Dynamic properties of object

// let myage=26;
// let myname = "subhangi";
// //let myage=26

// const mybio ={
//   [myname]:"hello how are ?",
//   [myage]:"is my age"
  
// }
// console.log(mybio);

//Spread operator

const colors = ['red','black','white','pink','blue'];
const mycolors=['red','black','white','pink','blue','purple']

const myfavcolor=[...colors,'orange','yellow'];
console.log(myfavcolor)



