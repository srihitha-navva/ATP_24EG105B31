//write a function that recieves an array and search element as args and returns the index of that search
//element in the array. it should return "not found" when search element not found
let x=function(arr,key) {
    let flag=0;
    let i;
    for (i=0;i<arr.length;i++) {
        if(arr[i]==key) {
            flag=1;
            break;
        }
    }
    if(flag==1)
        return i;
    else
        return "not found";
}
// call
arr=[10,20,30,40,50];
console.log(x(arr, 35))
