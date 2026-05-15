// Write a function that receives 3 number args and returns the big number
let x=function(a,b,c){
    if(a>b && a>c)
      console.log(a, "is greater")
    else if(b>a && b>c)
      console.log(b, "is greater")
    else
      console.log(c,"is greater")
}
//call
x(10,20,30)