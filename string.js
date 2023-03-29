// let myname = "subhangi"

// let ytname = new String("subhangi singh")

// console.log(ytname);
// console.log(myname);

// let myname = "prem kumar singh"
// console.log(myname.length)

// let a = "i am subhngi  singh i am persuing my btech ' from gargi memorial institute 'of technology"
// console.log(a);

//search value function
// let b = "i am subhangi  singh from bihar";
// console.log(b.indexOf("b",6));

//let b = "i am subhangi  singh from bihar";
//console.log(b.lastIndexOf("b",6));
//search method
//console.log(b.search("singh"));

// var c = b.search("singh");
// console.log(c);


let str = "apple,banana, kiwi"

 //let d = str.slice(2,-7);//eleminate the value from last index up to 7th from last
 //console.log(d)
// it gives the values starting from 8th index
// let d1 = str.slice(-7);//represent the 7 letter from last index 
// console.log(d1)
//substring method

// let d2 = str.substring(0,-4);//substring can,t take negative value
// console.log(d2);

// let e = str. replace("banana" ,"grapes");
// console.log(e);

// let str1 = "hellow world";//counting is start from 0
// console.log(str1.charAt(9));

// console.log(str1.charCodeAt(4));

// let fname = "subhangi"
// let lname = "singh"

// console.log(fname.concat(lname));
// console.log(fname.concat(" ", lname))

let str2 = "           hi how are you  "
console.log(str2.trim());

var txt = "a,b,c,d,e"

console.log(txt.split(","));
// console.log(txt.split(" "));
// console.log(txt.split(" [ "));

// Date  are created in javascript with the help of constructor
let currentdate= new Date()
let curDate = new Date()
// console.log(currentdate);
// console.log( new Date(). toLocaleString());
// console.log(new Date(). toString());

console.log(curDate.getFullYear());
console.log( "the month is "+ curDate.getMonth());
console.log(curDate.getDate());
console.log(curDate.getDay());

// if we want to set any date my own

console.log(curDate.setFullYear(2023,7,3))
// let setmonth = curDate.setMonth(10);
// console.log(setMonth());

//time stamp 

console.log(Date.now());

// var t = new Date().toLocaleTimeString();
// document.getElementById("time").innerHTML=t;

// (function(){
//     setInterval(()=> 
//         var d = new Date().toLocaleTimeString();
//         document.getElementById("demo").innerHTML=d;
//     })();
//time method
let curtime = new Time();
console.log(curTime.getTime());