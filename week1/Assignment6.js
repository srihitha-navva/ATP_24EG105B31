// Write a function that receives an array as arg and return their sum
let x=function(marks){
    let sum=0
    for(let i=0;i<marks.length;i++){
         sum+=marks[i]
}
return sum
}
//call
marks=[10,20,30,40,50]
console.log(x(marks))