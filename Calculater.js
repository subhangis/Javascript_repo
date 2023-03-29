// Make a calculater in javascript using callback function and higher order function

const add = (a,b)=>{
    return a+b;
}

const sub =(a,b)=>{
    return Math.abs(a-b);
}

const mul =(a,b)=>{
    return a*b;
}

const calculater =(a,b,operator)=>{
    return operator(a,b)
}
console.log(calculater(6,5,sub));
